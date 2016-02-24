exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    });
  },

  remove : function(arr, item) {
    return arr.filter(function(element) {
      return element !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    ////
    arr.sort(); 

    var i, len;
    for (i=0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        len = len - 1;
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
    /*
    return arr.reduce(function(n, val) {
      return n + (val === item);
    }, 0);
    */

    var count=0;
    arr.forEach(function (arrVal, arrIndex, array) {
      if(item == arrVal) count++;
    });

    return count;
  },

  duplicates : function(arr) {
    var results = [];
    arr.sort().forEach(function (arrVal, arrIndex, array) {
      if(array[arrIndex+1] == arrVal) results[arrVal] = arrVal;
    });
    return results;
  },

  square : function(arr) {
    return arr.map(function(num) {
      return num * num;
    });
  },

  findAllOccurrences : function(arr, target) {
    var indices = [];
    arr.forEach(function (arrVal, arrIndex, array) {
      if(arrVal == target)  indices.push(arrIndex);
    });
    return indices;
  }
};
