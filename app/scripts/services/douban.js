'use strict';

/**
 * @ngdoc service
 * @name jkefWebApp.douban
 * @description
 * # douban
 * Service in the jkefWebApp.
 */
angular.module('jkefWebApp')
  .service('douban', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var url = {
    	search: 'https://api.douban.com/v2/book/search?callback=?'
    };
    return {

    	list: function (start, success, fail) {
    		$.getJSON(url.search, {
    				tag: 'ngv_电子阅览室',
    				start: start
    			}, success);
    		// $http.jsonp(url.search, {
    		// 	params: {
    		// 		tag: 'ngv_电子阅览室',
    		// 		start: start
    		// 	}
    		// }).success(success).error(fail);
    	}
    }
  });
