'use strict';

/**
 * @ngdoc service
 * @name jkefWebApp.auth
 * @description
 * # auth
 * Service in the jkefWebApp.
 */
angular.module('jkefWebApp')
  .service('auth', function ($http) {
  	var url = {
  		getAuthorizeUrl: 	'http://api.jkef.nagu.cc/auth/url',
  		getMe: 				'http://api.jkef.nagu.cc/auth/me'
  	};
  	return {
	    // AngularJS will instantiate a singleton by calling "new" on this function
	    getAuthorizeUrl: function (success, fail) {
	    	$http.get(url.getAuthorizeUrl).success(function (data) {
	    		if(data.ret === 0) success(data.data);
	    		else fail(data);
	    	}).error(fail);
	    },

	    getMe: function (success, fail) {
	    	$http.get(url.getMe).success(function (data) {
	    		//获取正确时，得到的数据结构：
				// {
				//   "errcode": 0,
				//   "errmsg": "ok",
				//   "userid": "zhangsan",
				//   "name": "李四",
				//   "department": [1, 2],
				//   "position": "后台工程师",
				//   "mobile": "15913215421",
				//   "gender": 1,
				//   "tel": "62394",
				//   "email": "zhangsan@gzdev.com",
				//   "weixinid": "lisifordev",
				//   "avatar": "http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3WJ6DSZUfiakYe37PKnQhBIeOQBO4czqrnZDS79FH5Wm5m4X69TBicnHFlhiafvDwklOpZeXYQQ2icg/0",
				//   "status": 1
				// }
	    		if(data.ret === 0) success(data.data);
	    		else fail(data);
	    	}).error(fail);
	    }
	}
  });