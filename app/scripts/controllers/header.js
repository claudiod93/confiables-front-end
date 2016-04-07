/**
 * Created by claudioantonio on 10/9/15.
 */

angular.module('reliableApp')
    .controller('headerCtrl', function ($scope, miPerfilFactory, localStorageService, $location) {


        var session = localStorageService.get('sessionData');

        console.log('Session Header' , session);

        $scope.userHeader = '';

        $scope.search = function(){
            $scope.$broadcast('someEvent', [1,2,3]);
            window.location = "#/search";
        };

        $scope.$on("myEvent", function (event, args) {
            $scope.paras = {uno: args.comuna, dos: args.tipo};
            console.log('Memori params', paras);
        });


        if(session!=null){
            miPerfilFactory.getPerfil(session.id).then(function(resp){
                    $scope.userHeader = resp.nombreUsuario;
                    console.log('Nombre usuario', $scope.userHeader)
                }
            );
        }


        function headerCtrl($scope) {
            $scope.selectedComunas = undefined;
            $scope.selectedTipo = undefined;
            $scope.comunas = ['La Florida', 'Puente Alto', 'Las Condes', 'La Pintana'];
            $scope.tipos = ['Gasfiter', 'Medico', 'Informatico', 'Jardinero', 'Mecanico'];
        }
    }
);