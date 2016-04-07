'use strict';

describe('Controller: SlaCtrl', function () {

  // load the controller's module
  beforeEach(module('reliableApp'));

  var SlaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlaCtrl = $controller('SlaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SlaCtrl.awesomeThings.length).toBe(3);
  });
});
