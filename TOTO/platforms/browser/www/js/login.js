app.factory('loginSrv', ["$http",'Backand', function($http, Backand) {
        var service = {};

        service.loginBackand = function(cerdentials) {
            return $http ({
                method: 'GET',
                url: Backand.getApiUrl() + '/1/query/data/intersectUsernamePassword',
                params: {
                    parameters: {
                        username: cerdentials.username,
                        password: cerdentials.password
                    }
                }
            })
        }

        return service;

    }])
    .controller('LoginCtrl',['$scope','$state','loginSrv', function ($scope, $state, loginSrv) {
        var model = {};

        $scope.login = function(data) {
            loginSrv.loginBackand(data).then(function(response) {
                if(response.data.length > 0) {
                    model.isSuccess = true;
                    //$state.go('app.dashboard');
                    $state.go('app.cameraShot');
                }else {
                    model.isSuccess = false;
                }
            })
        }

        $scope.model = model;
    }])