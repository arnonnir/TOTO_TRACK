app.factory('cameraShotSrv', ["$http",'Backand', function($http, Backand) {
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
    .controller('cameraShotCtrl',['$scope','$state','cameraShotSrv', function ($scope, $state, cameraShotSrv) {
        var model = {toUpload: true};

        $("#uploadTrigger").click(function(){
            $("#uploadFile").click();
        });

        $scope.getFile = function (files) {
            debugger;
            var currentFile = files[0];
            model.fd = new FormData();
            model.fd.append("image", currentFile);
            model.fd.append("language", "iw");
            model.fd.append("apikey", "5RKRqZwDDr");

            var reader = new FileReader();
            reader.onload = function (event) {
                debugger;
                model.totoFormImg = event.target.result;
                model.toUpload = false;
                $scope.$apply();

                $('#target').Jcrop({
                        edge: [ 40,40,40,40 ],
                        setSelect: [ 20,20,200,200 ],
                        bgColor: 'blue'}
                    , function() {
                        jcrop_api = this;
                        init_interface();
                    });
            }

            reader.readAsDataURL(currentFile);
        };

        $scope.model = model;
    }])