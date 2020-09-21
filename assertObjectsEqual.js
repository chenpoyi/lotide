const { assert } = require('console');

const eqArrays = function(first, second) {
  //check if first and second arrays are of the same length
  if (first.length !== second.length) {
    return false;
  }
  //Loop through each element of both arrays and compare.
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
      //return false if mismatch
    }
  }
  return true; //return true if all matches
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {// checks if both values are arrays
      if (eqArrays(object1[key], object2[key])) {//check if 2 arrays equal
        return true;
      } else {
        return false;
      }
    } else if (object1[key] !== object2[key]) {//return false if 2 primitives are not equal
      return false;
    }
  }
  return true;

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  
  // Implement me!
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${inspect(actual)}!== ${inspect(expected)}`);
  }

};

//TEST CODE
// const obj1 = {a: '123', b: '567'};
// const obj2 = {a: '123', b: '567'};
// const obj3 = {a: '123', c: '567'};
// assertObjectsEqual(obj1, obj2);
// assertObjectsEqual(obj1, obj3);

module.exports = assertObjectsEqual;