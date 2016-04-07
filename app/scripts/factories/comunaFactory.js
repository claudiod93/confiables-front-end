/**
 * Created by claudioantonio on 12/10/15.
 */
angular.module('reliableApp')
    .factory('comunaFactory', function ($http) {

        return {
            getComunas : getComunas,
            getCiudades : getCiudades
        }

        function getComunas(){
            return $http({
                    url: 'http://localhost:8080/comunas',
                    method: "GET"
                }
            ).then(function(resp){
                    return resp.data;
                },
                function(){
                    return false;
                });
        };

        function getCiudades(){
            return $http({
                    url: 'http://localhost:8080/ciudad',
                    method: "GET"
                }
            ).then(function(resp){
                    return resp.data;
                },
                function(){
                    return false;
                });
        };
    }
)