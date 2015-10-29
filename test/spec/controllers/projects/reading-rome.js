'use strict';

describe('Controller: ProjectsReadingRomeCtrl', function () {

  // load the controller's module
  beforeEach(module('jkefWebApp'));

  var ProjectsReadingRomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsReadingRomeCtrl = $controller('ProjectsReadingRomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjectsReadingRomeCtrl.awesomeThings.length).toBe(3);
  });
});
