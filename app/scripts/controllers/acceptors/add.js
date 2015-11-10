'use strict';

/**
 * @ngdoc function
 * @name jkefWebApp.controller:AcceptorsAddCtrl
 * @description
 * # AcceptorsAddCtrl
 * Controller of the jkefWebApp
 */
angular.module('jkefWebApp')
  .controller('AcceptorsAddCtrl', function ($scope, acceptor, $rootScope) {
    $rootScope.manage = true;
  	var defaulAcc = {
  		highSchool: {},
  		bachelorSchool: {},
  		masterSchool: {},
  		doctorSchool: {},
  		wxent_UserIds: [{
  			corpName: '纳古志愿者'
  		}],
      idCard: {}
  	};

  	$scope.acceptor = defaulAcc;

  	$scope.actions = {
  		submit: function (acc) {
  			if(!acc.name || !acc.phone){
  				alert('姓名和手机号必须填写');
  				return;
  			}
  			acceptor.add(acc, function (data) {
  				alert('添加成功');
  				$scope.acceptor = defaulAcc;
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
          autoSignIn();
        }
      });
    else autoSignIn();
  });
