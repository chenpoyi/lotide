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

const assertArraysEqual = function(actual, expected) {
  //checks if eqArrays return true
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(array) {
  let result = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let subelement of element) {
        result.push(subelement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};

module.exports = flatten;
//TEST CODE
//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);