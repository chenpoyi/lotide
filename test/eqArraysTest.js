const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // => should PASS
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false); // => should PASS

console.log((eqArrays([[2, 3], [4]], [[2, 3], [4]]))); // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(eqArrays([2, [2,3], 4], [[2, [2,4]], 4])); // => false