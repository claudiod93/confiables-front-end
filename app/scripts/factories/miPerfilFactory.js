/**
 * Created by claudioantonio on 9/16/15.
 */
(function () {
    angular.module('reliableApp')
        .factory('miPerfilFactory', miPerfilFactory);

    miPerfilFactory.$inject = ['$http'];

    function miPerfilFactory($http) {

        return {
            getPerfil: getPerfil,
            savePerfil: savePerfil,
            savePerfilLaboral: savePerfilLaboral,
            getTodosPerfil : getTodosPerfil
        };

        function getTodosPerfil(){
            return $http(
                {
                    url: 'http://localhost:8080/users/all',
                    method: "GET"
                }
            ).then(function (response) {
                    return response.data;
                },
                function () {
                    return false;
                });
        }

        function savePerfil(data) {
            return $http(
                {
                    url: 'http://localhost:8080/users',
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
        };

        function getPerfil(id) {
            return $http(
                {
                    url: 'http://localhost:8080/users/id/' + id,
                    method: "GET"
                }
            ).then(function (response) {
                    return response.data;
                },
                function () {
                    return false;
                });
        };

        function savePerfilLaboral(user) {
            var data = {
                "id" : user.id,
                "datosLaborales" : {
                    "correo" : user.mail,
                    "categoria" : user.categoria,
                    "direccion" : {
                        "direccion" : user.direccion,
                        "complemento": user.complemento,
                        "codPostal": user.codPostal,
                        "comuna": user.comuna,
                        "cuidad" : user.cuidad,
                        "numeroDireccion" : user.numeroDireccion
                    },
                    "telefono" : {
                        "codPais" : user.codPais,
                        "codCuidad" : user.codCuidad,
                        "numero" : user.numero
                    }
                },
                "descripcion" : user.descripcion
            };
            console.log('UserLaborales' , data)
            return $http(
                {
                    url: 'http://localhost:8080/datoslaborales/byuserid/' + user.id,
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    data: data
                }
            ).then(function () {
                    return true;
                },
                function () {
                    return false;
                })
        };
    }
})();