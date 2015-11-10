'use strict';

describe('Controller: AcceptorsDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('jkefWebApp'));

  var AcceptorsDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AcceptorsDetailCtrl = $controller('AcceptorsDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AcceptorsDetailCtrl.awesomeThings.length).toBe(3);
  });
});
