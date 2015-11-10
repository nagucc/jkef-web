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
    	list: 'http://api.jkef.nagu.cc/acceptors/list',
        add: 'http://api.jkef.nagu.cc/acceptors/',
        get: 'http://api.jkef.nagu.cc/acceptors/'
    };

    return {
    	list: function (success, fail) {
    		$http.get(url.list, {
    			withCredentials: true
    		}).success(function (data) {
    			if(data.ret === 0) success(data.data);
    			else fail(data);
    		}).error(fail);
    	},
        add: function (acceptor, success, fail) {
            $http.put(url.add, acceptor, {
                withCredentials: true
            }).success(function (data) {
                if(data.ret === 0) success(data.data);
                else fail(data);
            }).error(fail);
        },
        get: function (id, success, fail) {
            $http.get(url.get + id, {
                withCredentials: true
            }).success(function (data) {
                if(data.ret === 0) success(data.data);
                else fail(data);
            }).error(fail);
        }
    }
  });
