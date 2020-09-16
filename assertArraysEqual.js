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

//TEST CODE
const first = [1,2,3];
const second = [1,2,3];
const third = [1,2,'3'];
assertArraysEqual(first, second); //SHOULD PASS
assertArraysEqual(first, third); //SHOULD FAIL