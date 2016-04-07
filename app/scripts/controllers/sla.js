'use strict';

/**
 * @ngdoc function
 * @name reliableApp.controller:SlaCtrl
 * @description
 * # SlaCtrl
 * Controller of the reliableApp
 */
(function() {
angular.module('reliableApp')
  .controller('SlaCtrl', SlaCtrl);

  SlaCtrl.$inject = ['slaFactory'];

  function SlaCtrl(slaFactory) {
    var vm = this;
    vm.bodyNotice = true;
    vm.bodyAccept = false;
      vm.range = 3;

    vm.aceptar = function(){
      vm.bodyNotice = true;
      vm.bodyAccept = false;
    }

    slaFactory.getSla().then(
        function(resp){
          console.log(resp);
          vm.listas = resp;
        },
        function(err){
          console.log(err);
        });
  };
})();
