// Opposite Signs
// Write a JavaScript program to check if two given integers have opposite signs.

// Test Data:
// (100, -100) -> "Signs are opposite"
// (100, 100) -> "Signs are not opposite"
// (‘100, 100) -> "Parameters value must be number!"


const opposite_Signs = (x, y) => {
        if ((typeof x!= "number") || (typeof y!= "number"))
        {
          return 'Parameters value must be number!'
        }  
         if ((x ^ y) < 0)
           return true; 
         else
           return false;
         }
x = 100
y = -100
result = opposite_Signs(x, y)
  if (result === true) 
      console.log("Signs are opposite"); 
  else if (result === false) 
      console.log("Signs are not opposite");
  else console.log(result);   
x = 100
y = 100
result = opposite_Signs(x, y)

  if (result === true) 
      console.log("Signs are opposite"); 
  else if (result === false) 
      console.log("Signs are not opposite");
  else console.log(result);  
x = '100'
y = 100
result = opposite_Signs(x, y)
  if (result === true) 
      console.log("Signs are opposite"); 
  else if (result === false) 
      console.log("Signs are not opposite");
  else console.log(result);
