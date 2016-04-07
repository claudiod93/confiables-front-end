'use strict';

describe('Controller: ProfileViewsCtrl', function () {

  // load the controller's module
  beforeEach(module('reliableApp'));

  var ProfileViewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileViewsCtrl = $controller('ProfileViewsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProfileViewsCtrl.awesomeThings.length).toBe(3);
  });
});
