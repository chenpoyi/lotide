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

const isInArray = function(word, array) {
  //loops through array to see if one of the elements is the same as the word
  for (let i = 0; i < array.length; i++) {
    if (word === array[i]) {
      return true;
    }
  }
  return false;
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  //Iterate through each element of the original array
  for (let i = 0; i < source.length; i++) {
    // check if word has to be removed
    if (!isInArray(source[i], itemsToRemove)) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

//TEST CODE

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);