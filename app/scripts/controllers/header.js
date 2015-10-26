'use strict';

/**
 * @ngdoc function
 * @name jkefWebApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the jkefWebApp
 */
angular.module('jkefWebApp')
  .controller('HeaderCtrl', function ($scope, auth) {
    $scope.loginUrl = 'http://aa.com';
    auth.getAuthorizeUrl(function (data) {
    	$scope.loginUrl = data;
    }, function (err) {
    	alert(err.msg);
    });
  });
