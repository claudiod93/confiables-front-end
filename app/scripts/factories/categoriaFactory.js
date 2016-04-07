/**
 * Created by claudioantonio on 12/10/15.
 */
angular.module('reliableApp')
    .factory('categortiaFactory', function($http){

        return {
            getCategorias : getCategorias
        }

        function getCategorias(){
            return $http({
                    url: 'http://localhost:8080/categoria',
                    method: "GET"
            }).then(function(resp){
                console.log('resp' , resp.data);
                return resp.data;
            }, function(){
                return false;
            })
        }
    }
)