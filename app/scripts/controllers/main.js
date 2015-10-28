'use strict';

/**
 * @ngdoc function
 * @name jkefWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jkefWebApp
 */
angular.module('jkefWebApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    $rootScope.manage = true;
    $scope.projects = [{
    	name: '奖学金',
    	descs: ['为符合条件的中高考优秀者发放奖学金']
    }, {
    	name: '助学金',
    	descs: ['为大学以上的优秀学生发放助学金，并关注他们的成长',
    			'与云南明德志愿服务中心合作']
    }, {
    	name: '电子阅览室',
    	descs: ['基于kindle创建的电子阅览室',
    			'已有超过40台kindle加入',
    			'与纳古志愿者协会合作']
    }, {
    	name: '其他项目',
    	descs: ['幼师成长计划']
    }
    ];
  });
