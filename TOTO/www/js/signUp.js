app.factory('signUpSrv', ["$http", 'Backand', function($http, Backand) {
        var service = {};

        service.signUpBackand = function(cerdentials) {
            return $http ({
                method: 'GET',
                url: Backand.getApiUrl() + '/1/query/data/userSignUp',
                params: {
                    parameters: {
                        username: cerdentials.username,
                        password: cerdentials.password,
                        email: cerdentials.email
                    }
                }
            })
        }

        return service;

    }])
    .controller('signUpCtrl',['$scope','$state','signUpSrv', function ($scope, $state, signUpSrv) {
        var model = {};

        $scope.signUp = function (data) {
            debugger;
            signUpSrv.signUpBackand(data).then(function (response) {
                debugger;
                if(response.data.length > 0) {
                    model.isSuccess = true;
                    $state.go('app.dashboard');
                } else {
                    model.isSuccess = false;
                }
            })
        }

        $scope.model = model;
    }])