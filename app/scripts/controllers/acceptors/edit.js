'use strict';

/**
 * @ngdoc function
 * @name jkefWebApp.controller:AcceptorsEditCtrl
 * @description
 * # AcceptorsEditCtrl
 * Controller of the jkefWebApp
 */
angular.module('jkefWebApp')
  .controller('AcceptorsEditCtrl', function ($rootScope, $scope, acceptor, $routeParams, $location) {
    $rootScope.manage = true;
    var id = $routeParams.id;
    acceptor.get(id, function (acc) {
    	$scope.acceptor = acc;
    }, function (result) {});


    $scope.actions = {
  		submit: function (acc) {
  			if(!acc.name || !acc.phone){
  				alert('姓名和手机号必须填写');
  				return;
  			}
  			acceptor.update(acc, function (data) {
  				$location.url('/acceptors/detail/' + data._id);
  			}, function (result) {
  				console.log(result.err);
  			});
  		}
  	};

    if($rootScope.promises.getMe)
      $rootScope.promises.getMe.then(function (me) {
        acceptor.list(function (acceptors) {
          $scope.acceptors = acceptors;
        }, function (err) {
          alert(err);
        });
      }, function (err) {
        // 如果用户未登录，自动使用微信登录
        if(err.ret === -2){
          $rootScope.autoSignIn();
        }
      });
    else $rootScope.autoSignIn();
  });
