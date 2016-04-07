'use strict';

describe('Controller: BusquedaavanzadaCtrl', function () {

  // load the controller's module
  beforeEach(module('reliableApp'));

  var BusquedaavanzadaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusquedaavanzadaCtrl = $controller('BusquedaavanzadaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BusquedaavanzadaCtrl.awesomeThings.length).toBe(3);
  });
});
