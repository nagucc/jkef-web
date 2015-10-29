'use strict';

describe('Controller: AcceptorListCtrl', function () {

  // load the controller's module
  beforeEach(module('jkefWebApp'));

  var AcceptorListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AcceptorListCtrl = $controller('AcceptorListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AcceptorListCtrl.awesomeThings.length).toBe(3);
  });
});
