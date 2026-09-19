// Swap Keys and Values
// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

// O/P :
// {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}

function invert_key_value(obj) {
    var result = {};
    var keys = _keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  }
function _keys(obj) 
  {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
 {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
