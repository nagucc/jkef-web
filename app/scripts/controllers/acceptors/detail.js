'use strict';

/**
 * @ngdoc function
 * @name jkefWebApp.controller:AcceptorsDetailCtrl
 * @description
 * # AcceptorsDetailCtrl
 * Controller of the jkefWebApp
 */
angular.module('jkefWebApp')
  .controller('AcceptorsDetailCtrl', function ($scope, acceptor, $routeParams) {
    var accId = $routeParams.id;
    if(!accId) return;
    acceptor.get(accId, function (acc) {
    	$scope.acceptor = acc;
    }, function (result) {
    	alert(result.msg);
    });
  });