// Check Property Existence
// Write a JavaScript function to check whether an object contains a given property.

// O/P :
// true

function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
console.log(hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));
