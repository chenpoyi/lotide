const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  //checks if eqArrays return true
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;