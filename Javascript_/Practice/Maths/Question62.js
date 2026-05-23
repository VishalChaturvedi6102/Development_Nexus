// Volume of a Prism with Hexagonal Side
// Write a JavaScript program to calculate the volume of a prism using only its height and one of its hexagonal sides.
// In geometry, the pentagonal prism is a prism with a pentagonal base. It is a type of heptahedron with seven faces, fifteen edges, and ten vertices.
// Define a function volume_Pentagonal_Prism that calculates the volume of a pentagonal prism given its base edge and height.


const volume_Pentagonal_Prism = (base_edge, height) => {
  is_Number(base_edge, 'Base Edge');
  is_Number(height, 'Height');
  
  return (1/4 * height * base_edge * base_edge * Math.sqrt(5 * (5 + 2 * (Math.sqrt(5)))));
}

const is_Number = (n, n_name = 'number') => {
  if (typeof n !== 'number') {
    throw new TypeError('The ' + n_name + ' is not Number type!');
  } 
  else if (n < 0 || (!Number.isFinite(n))) {
    throw new Error('The ' + n_name + ' must be a positive values!');
  }
}
console.log(volume_Pentagonal_Prism(4.0, 8.0));
console.log(volume_Pentagonal_Prism('4.0', 8.0));
console.log(volume_Pentagonal_Prism(4.0, -8.0));
