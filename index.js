/**
 * @module: nd-user
 * @author: crossjs <liwenfu@crossjs.com> - 2015-04-17 11:39:53
 */

'use strict';

var Storage = require('nd-storage');

module.exports = {

  tokenKey: 'USER_DATA',

  userdata: null,

  get: function() {
    var userdata = this.userdata;

    if (!userdata) {
      // 本地存储
      userdata = Storage.get(this.tokenKey);

      if (userdata) {
        userdata = this.userdata = JSON.parse(userdata);
      }
    }

    if (userdata) {
      var args = Array.prototype.slice.call(arguments);
      var key;

      while ((key = args.shift()) && userdata) {
        userdata = userdata[key];
      }
    }

    return userdata;
  },

  /**
   * 设置或清除 userdata
   * @param {object} userdata userdata值
   */
  set: function(userdata) {
    this.userdata = userdata;

    if (userdata === null) {
      Storage.remove(this.tokenKey);
    } else {
      Storage.set(this.tokenKey, JSON.stringify(userdata));
    }
  }

};
