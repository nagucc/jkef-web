'use strict';

/**
 * @ngdoc function
 * @name jkefWebApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the jkefWebApp
 */
angular.module('jkefWebApp')
  .controller('HeaderCtrl', function ($scope, auth, $rootScope) {

    $scope.avatar = 'images/avatar.png';

  	$rootScope.promises = $rootScope.promises || {};

    $rootScope.promises.getMe = auth.getMe().then(function (me) {
    	$rootScope.me = me;
        $scope.avatar = me.avatar;
    }, function (err) {

    	// 如果用户未登录
    	if(err.ret === -2){

    		// 生成登录按钮链接
    		auth.getAuthorizeUrl().then(function (data) {
		    	$scope.loginUrl = data;
		    }, function (err) {
		    	alert(err.msg);
		    });
    	}
    });

    $scope.actions = {
      signOut: function () {
        auth.signOut(function () {
          delete $rootScope.promises.getMe;
          delete $rootScope.me;
        });
      }
    }
  });
