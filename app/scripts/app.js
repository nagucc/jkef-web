'use strict';

/**
 * @ngdoc overview
 * @name jkefWebApp
 * @description
 * # jkefWebApp
 *
 * Main module of the application.
 */
angular
  .module('jkefWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/member/edit', {
        templateUrl: 'views/member/edit.html',
        controller: 'MemberEditCtrl'
      })
      .when('/acceptors/list', {
        templateUrl: 'views/acceptor/list.html',
        controller: 'AcceptorListCtrl',
        controllerAs: 'acceptor/list'
      })
      .when('/projects/reading-room', {
        templateUrl: 'views/projects/reading-rome.html',
        controller: 'ProjectsReadingRomeCtrl',
        controllerAs: 'projects/readingRome'
      })
      .when('/acceptors/new', {
        templateUrl: 'views/acceptors/edit.html',
        controller: 'AcceptorsAddCtrl',
        controllerAs: 'acceptors/add'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
