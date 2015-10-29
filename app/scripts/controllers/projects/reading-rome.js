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
  	$scope.getBooks = function () {
  		douban.list($scope.start, function (result) {
	    	$scope.books = $scope.books.concat(result.books);
	    	$scope.start += result.count;
	    	$scope.total = result.total;
	    	$scope.$apply();
	    });
  	}

  	$scope.start = 0;
  	$scope.books = [];
    $scope.getBooks();
  });
