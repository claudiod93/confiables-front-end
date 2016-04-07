/**
 * Created by claudioantonio on 11/20/15.
 */
(function() {
        angular.module('reliableApp')
            .factory('loginFactory', loginFactory)

        loginFactory.$inject = ['$http'];

        function loginFactory() {
            return {
                login: login
            }

            function login(data){

                var url = 'http://localhost:8080/login';

                return $http({
                    url: url,
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    data: data
                }).then(function (response) {
                    return {
                        success: response.data
                    };
                }, function () {
                    return false;
                });
            }
        }
    }
)();