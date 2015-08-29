'use strict';

/**
 * @ngdoc function
 * @name jkefWebApp.controller:MemberEditCtrl
 * @description
 * # MemberEditCtrl
 * Controller of the jkefWebApp
 */
angular.module('jkefWebApp')
  .controller('MemberEditCtrl', function ($scope) {
    $scope.member = {}; 
    $scope.MemberRules = { 
    	name: { 
    		inputType:'text', 
    		label: '名称', 
    		required: { rule: true, message: '必须填写名称' } 
		}, 
		port: { 
			inputType: 'text', 
			label: '端口', 
			required: { rule: true, message: '必须填写端口号' }, 
			type: { rule: 'number', message: '只能填写数字' }, 
			minimum: { rule: 1, message: '无效的端口号' }, 
			maximum: { rule: 65535, message: '无效的端口号' } 
		} 
	}; 
	$scope.submit = function (data) { }
});
