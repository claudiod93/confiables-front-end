/**
 * Created by claudioantonio on 12/11/15.
 */
angular.module('reliableApp')
    .factory('contratosFactory', function($http, localStorageService){

        return {
            realizarContratos : realizarContratos
        };

        function realizarContratos(data){
            var session = localStorageService.get('sessionData');
            return $http(
                {
                    url: 'http://localhost:8080/contratos/'+session.id+"/contracts",
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    data: data
                }
            ).then(function () {
                    return true;
                },
                function () {
                    return false;
                });
        }
    }
);