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
    }
  });
