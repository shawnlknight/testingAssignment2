if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
    	return fn.apply(fn, arr);

    	// this works too using 'this'
    	// return fn.apply(this, arr);

    },

    speak : function(fn, obj) {
    	return fn.call(obj);

    },

    useArguments : function() {
    	var something = 0;

        for (var i = 0, length = arguments.length; i < length; i++) {
          something +=  arguments[i];
        }
        return something;

    }
  };
});

