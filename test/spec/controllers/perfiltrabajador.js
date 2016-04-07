'use strict';

describe('Controller: PerfiltrabajadorCtrl', function () {

  // load the controller's module
  beforeEach(module('reliableApp'));

  var PerfiltrabajadorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerfiltrabajadorCtrl = $controller('PerfiltrabajadorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PerfiltrabajadorCtrl.awesomeThings.length).toBe(3);
  });
});
