'use strict';

/**
 * @ngdoc function
 * @name reliableApp.controller:MapsCtrl
 * @description
 * # MapsCtrl
 * Controller of the reliableApp
 */
(function() {
angular.module('reliableApp')
  .controller('MapsCtrl', MapsCtrl);

  MapsCtrl.$inject = ['$routeParams'];

  function MapsCtrl($routeParams){

    console.log($routeParams.id);
  }
})();
