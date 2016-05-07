app.factory('dashboardSrv', ["$http", function($http) {
        var service = {};

        service.login = function(cerdentials) {
            return $http.get(appConfig.webServerUrl + "/authentication", {params: {username: cerdentials.username, password: cerdentials.password}});
        }

        return service;
    }])
    .controller('dashboardCtrl',['$scope','$state','dashboardSrv', function ($scope, $state, dashboardSrv) {

    }])