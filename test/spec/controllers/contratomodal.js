'use strict';

describe('Controller: ContratomodalCtrl', function () {

  // load the controller's module
  beforeEach(module('reliableApp'));

  var ContratomodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContratomodalCtrl = $controller('ContratomodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContratomodalCtrl.awesomeThings.length).toBe(3);
  });
});
