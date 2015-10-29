'use strict';

/**
 * @ngdoc function
 * @name jkefWebApp.controller:ProjectsReadingRomeCtrl
 * @description
 * # ProjectsReadingRomeCtrl
 * Controller of the jkefWebApp
 */
angular.module('jkefWebApp')
  .controller('ProjectsReadingRomeCtrl', function ($scope, douban) {
  	$scope.hello = 'hel';
    douban.list(0, function (result) {
    	$scope.books = result.books;
    	$scope.$apply();
    });
  });
