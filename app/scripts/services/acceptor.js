'use strict';

/**
 * @ngdoc service
 * @name jkefWebApp.acceptor
 * @description
 * # acceptor
 * Service in the jkefWebApp.
 */
angular.module('jkefWebApp')
  .service('acceptor', function ($q, $http) {
    var url = {
    	list: 'http://api.jkef.nagu.cc/acceptors/list'
    };

    return {
    	list: function (success, fail) {
    		$http.get(url.list, {
    			withCredentials: true
    		}).success(function (data) {
    			if(data.ret === 0) success(data.data);
    			else fail(data);
    		}).error(fail);
    	}
    }
  });
