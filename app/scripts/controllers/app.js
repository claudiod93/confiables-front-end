'use strict';

/**
 * @ngdoc function
 * @name reliableApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the reliableApp
 */
angular.module('reliableApp')
    .controller('AppCtrl', function ($rootScope, $scope, $location, Userservice, localStorageService, miPerfilFactory) {
        $scope.userCredentials = {'username': '', 'password': '', 'email': '', 'first_name': '', 'last_name': ''};
        $scope.registerUserMode = false;

        $scope.registerData = {
            'mail': '', 'nombreUsuario': '', 'contrasena': '', 'nombres': '', 'apellidos': ''
            , 'genero': '', 'fechaNacimiento': '',"DatosLaborales" : {},
            'facebook': '', 'twitter': '', 'linkedin': '', 'youtube': '', 'premium': ''
        };

        $scope.showRegistrationForm = function () {
            $scope.registerUserMode = true;
        };

        var session = localStorageService.get('sessionData');
        console.log(session);
        if (session) {
            $rootScope.isLoggedIn = true;
        } else {
            $rootScope.isLoggedIn = false;
        }

        $scope.logout = function () {
            localStorageService.remove('sessionData');
        };

        $scope.doLogin = function () {
            console.log('login credentials', $scope.userCredentials);
            Userservice.login($scope.userCredentials)
                .then(function (response) {
                    console.log('Successful Login: ', response)
                    $rootScope.isLoggedIn = true;
                    var currentUser = response;
                    $rootScope.currentUser = currentUser;
                    console.log('user: ', $rootScope.currentUser)
                    $rootScope.apply;
                }
                , function (reason) {
                    console.log('Falied login: ', reason)
                    $rootScope.isLoggedIn = false;
                })

        };

        $scope.doRegister = function () {
            miPerfilFactory.savePerfil($scope.registerData).then(function(data) {
                if(!data){
                    alert('No pudo Guardar')
                } else {
                    $scope.registerUserMode = false;
                    alert('Guardo con Exito')
                }
            });
        }
    });