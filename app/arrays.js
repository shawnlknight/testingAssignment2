if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);

    },

    sum : function(arr) {
        var something = 0;

        for (var i = 0; i < arr.length; i++) {
          something +=  arr[i];
        }
        return something; 
  
       

    },

    remove : function(arr, item) {
            var somethingArr = [];

            for(var i=0; i < arr.length; i++) {
                if(arr[i] !== item) {
                    somethingArr.push(arr[i]);
                }
            }
            
            return somethingArr;
    },

    removeWithoutCopy : function(arr, item) {
             var somethingArr = [];

            for(var i=0; i < arr.length; i++) {
                if(arr[i] !== item) {
                    somethingArr.splice(arr[i]);
                    somethingArr.push(arr[i]);
                    somethingArr.push(arr[i]);
                }
            }
            
            return somethingArr;

    },

    append : function(arr, item) {


    },

    truncate : function(arr) {


    },

    prepend : function(arr, item) {


    },

    curtail : function(arr) {


    },

    concat : function(arr1, arr2) {


    }, 

    insert : function(arr, item, index) {


    },

    count : function(arr, item) {


    },

    duplicates : function(arr) {

    },

    square : function(arr) {
        var newArr = [];
        for(var i=0; i < arr.length; i++) {
            newArr.push(arr[i] * arr[i]);
        }

        return newArr;

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
