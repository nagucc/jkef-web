'use strict';

/**
 * @ngdoc function
 * @name jkefWebApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the jkefWebApp
 */
angular.module('jkefWebApp')
  .controller('HeaderCtrl', function ($scope, auth, $rootScope, $location) {

    $rootScope.me = {
      avatar: 'images/avatar.png'
    };

  	$rootScope.promises = $rootScope.promises || {};

    $rootScope.promises.getMe = auth.getMe(function (me) {
      $rootScope.me = me;
    });

    // 自动登录
    $rootScope.autoSignIn = function () {
      // 生成登录按钮链接
      auth.getAuthorizeUrl().then(function (data) {
        window.location = data;
      }, function (err) {
        alert(err.msg);
      });
    }

    $scope.actions = {
      signOut: function () {
        auth.signOut(function () {
          delete $rootScope.promises.getMe;
          $rootScope.me = {
            avatar: 'images/avatar.png'
          };
          $location.url('/');
        });
      }
    };
  });
