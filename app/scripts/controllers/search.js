'use strict';

/**
 * @ngdoc function
 * @name reliableApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the reliableApp
 */

angular.module('reliableApp')
    .controller('SearchCtrl', function ($modal, miPerfilFactory, $scope, contratosFactory) {

        $scope.isCollapsed = true;

        $scope.dataContratos = {"proveedor":"", "nombre":"",
            "descripcion": "", "fechaInicio":"",
        "fechaFin": "", "clausulaTermino": "", "valorServicio": "",
        "comision": "", "pendiente": 1, "aceptado":0, "terminado":0 };

        $scope.realizarContrato = function(){
            contratosFactory.realizarContratos($scope.dataContratos).then(function(resp){
                $scope.isCollapsed = true;
                if(!resp){
                    alert('Error al contratar');
                } else {
                    alert('Se envio solicitud');
                }
            });
        };

        miPerfilFactory.getTodosPerfil().then(function(resp){
            $scope.sarchResult = resp;
        });


        $scope.textSearch = "";
        $scope.rate = 5;
        $scope.category = "";
        $scope.distence = "";
    }
)
