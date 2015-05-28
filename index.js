/**
 * @module User
 * @author crossjs <liwenfu@crossjs.com>
 * @create 2015-04-17 11:39:53
 */

'use strict';

var Storage = require('nd-storage');

var storage = new Storage();

module.exports = {

  tokenKey: 'USER_DATA',

  userdata: null,

  get: function() {
    var userdata = this.userdata;

    if (!userdata) {
      // 本地存储
      userdata = storage.get(this.tokenKey);

      if (userdata) {
        this.userdata = userdata;
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
      storage.remove(this.tokenKey);
    } else {
      storage.set(this.tokenKey, userdata);
    }
  }

};
