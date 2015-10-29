'use strict';

/**
 * @ngdoc function
 * @name jkefWebApp.controller:AcceptorListCtrl
 * @description
 * # AcceptorListCtrl
 * Controller of the jkefWebApp
 */
angular.module('jkefWebApp')
  .controller('AcceptorListCtrl', function (auth, $scope, $rootScope, acceptor) {
  	$rootScope.manage = true;

  	// 自动登录
  	var autoSignIn = function () {
  		// 生成登录按钮链接
		auth.getAuthorizeUrl().then(function (data) {
	    	window.location = data;
	    }, function (err) {
	    	alert(err.msg);
	    });
  	}

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
	  			autoSignIn();
	  		}
	  	});
	else autoSignIn();
  });