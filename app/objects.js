if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	return fn.call(obj);

    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;

    },

//The hasOwnProperty() method returns a boolean indicating whether the object has the specified property.
    iterate : function(obj) {
        var something = [];

        for(var prop in obj) {
            if(obj.hasOwnProperty(prop)) {
                something.push(prop + ': ' + obj[prop]);
            }
        }
        
        return something;



    }
  };
});
