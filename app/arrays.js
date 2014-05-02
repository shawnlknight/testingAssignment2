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

            for(var i=0; i < arr.length; i++) {
                if(arr[i] == item) {
                    arr.splice(i, 1);
                    arr.length = arr.length - 1;
                    i = i -1;
                    
                }
            }
            
            return arr;

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;


    },

    truncate : function(arr) {
        arr.pop();
        return arr;


    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;


    },

    curtail : function(arr) {
        arr.shift();
        return arr;


    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);


    }, 

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;


    },

    count : function(arr, item) {
        var countAllOccur = [];
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] == item) {
                countAllOccur.push(arr[i]);
            }
        }
        return countAllOccur.length;

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
        var allOccur = 0;
        _.each(arr, function(elem) {
            if(target == elem) {
                allOccur += elem;
            }
        });
        return allOccur;
    }
  };
});
