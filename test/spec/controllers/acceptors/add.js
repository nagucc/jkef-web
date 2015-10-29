'use strict';

describe('Controller: AcceptorsAddCtrl', function () {

  // load the controller's module
  beforeEach(module('jkefWebApp'));

  var AcceptorsAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AcceptorsAddCtrl = $controller('AcceptorsAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AcceptorsAddCtrl.awesomeThings.length).toBe(3);
  });
});
