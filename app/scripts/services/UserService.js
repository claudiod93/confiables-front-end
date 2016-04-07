/**
 * Created by claudioantonio on 11/21/15.
 */
angular.module('reliableApp')
    .service('Userservice', function($rootScope, $http, localStorageService) {


        return {
            login: function (credentials) {
                /* var deferred = $q.defer();
                var users = [
                    {
                        nombreUsuario: "juan",
                        nombres: "Juan Poblete",
                        apellidos: "Bazaes",
                        mail: "test@test.cl",
                        contrasena: "1234",
                        genero: null,
                        fechaNacimiento: null,
                        facebook: null,
                        twitter: null,
                        linkedin: null,
                        youtube: null,
                        premium: 1
                    },
                    {
                        nombreUsuario: "claudio",
                        nombres: "Claudio Antonio",
                        apellidos: "Díaz Cubillos",
                        mail: "clau.diazcubillos@gmail.com",
                        contrasena: "12",
                        genero: null,
                        fechaNacimiento: null,
                        facebook: null,
                        twitter: null,
                        linkedin: null,
                        youtube: null,
                        premium: 1
                    }
                ];
                var data = {
                    nombreUsuario: credentials.username,
                    contrasena: credentials.password
                };

                //verificamo si existe en el listado
                var usuario = $filter('filter')(users,data,true);
                console.log("usuario", usuario[0]);
                if(usuario.length>0){
                    deferred.resolve(usuario[0]);
                    localStorageService.set('sessionData', usuario[0]);
                }else {
                    deferred.reject(false);
                }

                return deferred.promise; */

                var url = 'http://localhost:8080/login';
                return $http({
                    url: url,
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    data: {
                        nombreUsuario: credentials.username,
                        contrasena: credentials.password,
                        mail: credentials.email
                    }
                }).then(function (response) {
                    console.log("respuesta serv ok", response);
                    localStorageService.set('sessionData', response.data);
                    return {
                        success: response.data
                    };
                }, function (error) {
                    console.log("respuesta serv error", error);
                    return false;
                });
            },

            register: function(credentials){


            }
        }
    }
);