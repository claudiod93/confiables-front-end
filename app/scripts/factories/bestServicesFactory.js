/**
 * Created by claudioantonio on 11/13/15.
 */
(function() {
    angular.module('reliableApp')
        .factory('bestServicesFactory', bestServicesFactory);

    bestServicesFactory.$inject = ['$http'];

    function bestServicesFactory($http){

        return{
            getBestOfWeek : getBestOfWeek
        };

        function getBestOfWeek(){
            return $http({
                    url: 'http://localhost:9000/contracts/bestForCategory.json',
                    method: 'GET'
                }
            ).then(function(response) {
                    return response.data;
                }
                ,
                function() {
                    return false;
                })
        }
    }
})();