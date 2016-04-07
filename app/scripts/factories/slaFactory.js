/**
 * Created by claudioantonio on 9/16/15.
 */
(function() {
    angular.module('reliableApp')
        .factory('slaFactory', slaFactory);

    slaFactory.$inject = ['$http'];

    function slaFactory($http){

        return{
            getSla : getSla
        };

        function getSla() {
            return $http(
                {
                    url: 'http://confiables.herokuapp.com/slas.json',
                    method: "GET"
                }
            ).then(function (response) {
                    return response.data;
                },
                function () {
                    return false;
                });
        }
    }
})();