// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  
  let wordCount = {};
  for (let letter of word) {
    if (wordCount[letter]) {
      wordCount[letter] += 1;
    } else {
      wordCount[letter] = 1;
    }
  }
  return wordCount;
};
//TEST CODE

let result = countLetters('abcc');
console.log(result);
assertEqual(result['a'],1);
assertEqual(result['b'],1);
assertEqual(result['c'],2);