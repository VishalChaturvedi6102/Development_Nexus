// Reverse Polish Notation (RPN)
// Write a JavaScript program to apply reverse Polish notation to a given mathematical expression.
// Reverse Polish notation (RPN), also known as reverse Łukasiewicz notation, Polish postfix notation or simply postfix notation, is a mathematical notation in which operators follow their operands, in contrast to Polish notation (PN), in which operators precede their operands. It does not need any parentheses as long as each operator has a fixed number of operands. The description "Polish" refers to the nationality of logician Jan Łukasiewicz, who invented Polish notation in 1924.
// Sample Data:
// "5 8 *" -> 40
// "5 6 + 2 *" -> 22
// "5 3 4 * +" -> 17

const RPN_calculation = (math_expr) => {
  const operators = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => y / x
  };
  
  
  const expr_part = math_expr.split(' ');
  const data = [];

  expr_part.forEach((expr_part) => {
    const operator = operators[expr_part];
    if (typeof operator === 'function') {
      const x = data.pop();
      const y = data.pop();
      const result = operator(x, y);
      data.push(result);
    } else {
      data.push(parseFloat(expr_part));
    }
  });
  
  // Return the final result
  return data.pop();
};

console.log(RPN_calculation("5 8 *"));      
console.log(RPN_calculation("5 6 + 2 *"));  
console.log(RPN_calculation("5 3 4 * +")); 
