'use strict';

/**
 * @ngdoc function
 * @name jkefWebApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the jkefWebApp
 */
angular.module('jkefWebApp')
  .controller('SidebarCtrl', function ($rootScope, $location) {
    $rootScope.shortcuts = [];
    if($location.url().indexOf('/acceptors') === 0){
    	  	$rootScope.shortcuts = [{
		  		btnType: 'btn-warning',
		  		icon: 'users',
		  		href: '#/acceptors/list'
		  	}, {
		  		btnType: 'btn-info',
		  		icon: 'plus',
		  		href: '#/acceptors/new'
		  	}];
    }
    $rootScope.navList = [{
    	href: '#',
    	icon: 'fa-tachometer',
    	name: 'name'
    }];
  });
