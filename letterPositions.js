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



const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;
// const results = letterPositions("hello");
// console.log("Results: ", results);
// assertArraysEqual(results['h'], [0]);
// assertArraysEqual(results['e'], [1]);
// assertArraysEqual(results['l'], [2, 3]);
// assertArraysEqual(results['o'], [4]);