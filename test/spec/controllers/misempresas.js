'use strict';

describe('Controller: MisempresasCtrl', function () {

  // load the controller's module
  beforeEach(module('reliableApp'));

  var MisempresasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MisempresasCtrl = $controller('MisempresasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MisempresasCtrl.awesomeThings.length).toBe(3);
  });
});
