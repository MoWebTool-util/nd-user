/**
 * @module Debug
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict';

module.exports = {

  log: function() {
    console.log.apply(null, arguments);
  },

  warn: function() {
    console.warn.apply(null, arguments);
  },

  error: function() {
    console.error.apply(null, arguments);
  },

  info: function() {
    console.info.apply(null, arguments);
  },

  success: function() {
    console.info.apply(null, arguments);
  }

};
