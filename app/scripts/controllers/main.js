'use strict';

/**
 * @ngdoc function
 * @name reliableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reliableApp
 */
(function() {
  angular.module('reliableApp')
      .controller('MainCtrl', MainCtrl);

      MainCtrl.$inject = ["$modal", "bestServicesFactory"];

  function MainCtrl($modal, bestServicesFactory) {
    var vm = this;
    var baseUrl = 'http://lorempixel.com/1400/450/';


    vm.alerta = function(){
      alert('A sido contactado');
    }


      //$modal.open({
      //  controller: "SlaCtrl",
      //  controllerAs: "sla",
      //  templateUrl : 'views/sla.html'
      //});

    bestServicesFactory.getBestOfWeek().then(function(data) {
      //console.log(data.bestofweek);
      if(!data){
        //console.log(data);

      }
      vm.contenido = data.bestofweek;
    });

    var baseURL='http://lorempixel.com/200/200/';
    vm.contenido=[
      {
        img:'images/perfil_1.jpg',
        title:'Eduardo Garga',
        category : 'Mecanica y Automotriz',
        sumario:'loren ipsum'
      },
      {
        img:'images/perfil_2.jpg',
        title:'Roberto Ojeda',
        category : 'Mecanica y Automotriz',
        sumario:'loren ipsum'
      },
      {

        img: 'images/perfil_3.jpg',
        title:'Juan Canalla',
        sumario:'loren ipsum'
      },
      {

        img: 'images/perfil_3.jpg',
        title:'Juan Canalla',
        sumario:'loren ipsum'
      }
    ];
  }
}
)();
