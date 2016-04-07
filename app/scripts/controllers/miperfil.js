'use strict';

/**
 * @ngdoc function
 * @name reliableApp.controller:MiperfilCtrl
 * @description
 * # MiperfilCtrl
 * Controller of the reliableApp
 */

angular.module('reliableApp')
    .controller('MiperfilCtrl', function (miPerfilFactory, localStorageService, $scope, categortiaFactory, comunaFactory, $modal) {

        $scope.rate = 3;
        $scope.isCollapsed = true;

        $scope.datosLaborales = {"id" : "", "mail" : "",
            "codPais" : "",
            "codCuidad": "", "numero" : "",
            "ciudad" : "",
            "direccion": "",
            "numeroDireccion" : "",
            "complemento" : "",
            "codPostal" : "",
            "comuna" : "",
            "categoria" : "",
            "descripcion" : ""};


        $scope.evaluar = function(){
            $modal.open({
              controller: "SlaCtrl",
              controllerAs: "sla",
              templateUrl : 'views/sla.html'
            });
        }

        $scope.experiencia = [
            {
                "empresa": "Banco de Chile",
                "cargo": "Especialista",
                "fechaDesde": "19 de Agosto 2014",
                "fechaHasta": "Actual",
                "descripcion": "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
            }, {
                "empresa": "TCS",
                "cargo": "Análista",
                "fechaDesde": "20 de Enero del 2012",
                "fechaHasta": "18 de Agosto del 2014",
                "descripcion": "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
            }
        ];

        $scope.addDatosLaborales = function()
        {
            $scope.datosLaborales.id = session.id;
            miPerfilFactory.savePerfilLaboral($scope.datosLaborales).then(function(resp){
                if(!resp){
                    alert('No se Guardo');
                } else {
                    alert('Se guardo');
                }
            });

        }

        var session = localStorageService.get('sessionData');

        categortiaFactory.getCategorias().then(function(data){
            $scope.combosCategoria = data;
        });

        comunaFactory.getComunas().then(function(data){
            $scope.comboComunas = data;
        });

        comunaFactory.getCiudades().then(function(data){
            $scope.comboCiudades = data;
        });

        if (session != null) {
            miPerfilFactory.getPerfil(session.id).then(function (resp) {
                if (!resp) {
                    //TODO
                    console.log(resp);
                }
                console.log("UsuarioResponse",resp);
                $scope.nombre = session.nombreUsuario;
                $scope.foto = resp.foto;
                $scope.correoPersonal = resp.mail;
                $scope.codigoPais = resp.codigoPais;
                $scope.codigoArea = resp.codigoArea;
                $scope.numeroTelefonoPersonal = resp.numeroTelefonoPersonal;
                $scope.direccionPersonal = resp.direccionPersonal;
                $scope.pais = resp.pais;
                $scope.cuidad = resp.cuidad;
                $scope.numeroDireccionPersonal = resp.numeroDireccionPersonal;
                $scope.complemento = resp.complemento;
                $scope.codigoPostal = resp.codigoPostal;

                if(resp.datosLaborales != null){
                    $scope.datosLaborales = {"id" : "", "mail" : resp.datosLaborales.correo,
                        "codPais" : resp.datosLaborales.telefono.codPais,
                        "codCuidad": resp.datosLaborales.telefono.codCuidad, "numero" : resp.datosLaborales.telefono.numero,
                        "ciudad" : resp.datosLaborales.direccion.ciudad,
                        "direccion": resp.datosLaborales.direccion.direccion,
                        "numeroDireccion" : resp.datosLaborales.direccion.numeroDireccion ,
                        "complemento" : resp.datosLaborales.direccion.complemento,
                        "codPostal" : resp.datosLaborales.direccion.codPostal,
                        "comuna" : resp.datosLaborales.direccion.comuna,
                        "categoria" : resp.datosLaborales.categoria,
                        "descripcion" : resp.datosLaborales.descripcion};
                }


            })
        };
    }
);
