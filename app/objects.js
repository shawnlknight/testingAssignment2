if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	return fn.call(obj);

    },

    alterObjects : function(constructor, greeting) {
    	return fn.call(constructor, greeting);

    },

    iterate : function(obj) {

    }
  };
});
