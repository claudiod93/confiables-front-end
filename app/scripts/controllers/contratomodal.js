'use strict';

/**
 * @ngdoc function
 * @name reliableApp.controller:ContratomodalCtrl
 * @description
 * # ContratomodalCtrl
 * Controller of the reliableApp
 */
angular.module('reliableApp')
  .controller('ContratomodalCtrl', function ($scope, $ModalInstance) {

      $scope.dataContratos = {"proveedor":"", "nombre":"",
        "descripcion": "", "fechaInicio":"",
        "fechaFin": "", "clausulaTermino": "", "valorServicio": "",
        "comision": "", "pendiente": 1, "aceptado":0, "terminado":0 };

      $scope.contratado = function(){
        console.log("meotod contratado")
        $ModalInstance.close($scope.dataContratos);
      }
  });
