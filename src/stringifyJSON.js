// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here


  //if string string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }  else if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return '' + obj;
  }

  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
  }

  if (typeof obj === 'object') {
    
    var str = '';
    var arr = Object.keys(obj);
  
    for (var i = 0; i < arr.length; i++) {
      if (typeof obj[arr[i]] === 'function' || obj[arr[i]] === undefined) {
        continue;
      } else if (i === arr.length - 1) {
        str += stringifyJSON(arr[i]) + ':' +  stringifyJSON(obj[arr[i]]);
      } else {
        str += stringifyJSON(arr[i]) + ':' +  stringifyJSON(obj[arr[i]]) + ',';
      }
    }
    return '{' + str + '}';
  }

  //arrays/objects seperately
   

};
