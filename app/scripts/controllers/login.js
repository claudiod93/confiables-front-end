'use strict';

/**
 * @ngdoc function
 * @name reliableApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the reliableApp
 */
(function() {
angular.module('reliableApp')
  .controller('loginCtrl', loginCtrl)

      loginCtrl.$inject = ['loginFactory, $location'];

  function loginCtrl(loginFactory, $location) {
    var vm = this;

    vm.email = "";
    vm.pass = "";

    vm.login = function(){

      var data = {
        nombreUsuario: vm.email,
        contrasena: vm.pass,
        mail: vm.email
      }

      loginFactory.login(data).then(function(data){
        if(!data){
          $location.path("/error");
        } else {
          $location.path("/index");
        }
      });
    }

  }}
)();
