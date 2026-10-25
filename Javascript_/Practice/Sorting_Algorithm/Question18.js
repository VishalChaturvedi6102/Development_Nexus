/*
Sort Objects by Property Order

Write a JavaScript program to sort an array of objects, ordered by a property, based on the array of orders provided.

Use Array.prototype.reduce() to create an object from the order array with the values as keys and their original index as the value.
Use Array.prototype.sort() to sort the given array, skipping elements for which prop is empty or not in the order array.

O/P :
[{"name":"fred","language":"Javascript"},{"name":"frannie","language":"Javascript"},{"name":"barney","language":"TypeScript"},{"name":"anna","language":"Java"},{"name":"jimmy"},{"name":"nicky","language":"Python"}]
 */



const orderWith = (arr, prop, order) => {
  const orderValues = order.reduce((acc, v, i) => {
    acc[v] = i;
    return acc;
  }, {});
  return [...arr].sort((a, b) => {
    if (orderValues[a[prop]] === undefined) return 1;
    if (orderValues[b[prop]] === undefined) return -1;
    return orderValues[a[prop]] - orderValues[b[prop]];
  });
};
 
const users = [
  { name: 'fred', language: 'Javascript' },
  { name: 'barney', language: 'TypeScript' },
  { name: 'frannie', language: 'Javascript' },
  { name: 'anna', language: 'Java' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'Python' },
];
console.log(orderWith(users, 'language', ['Javascript', 'TypeScript', 'Java']));
