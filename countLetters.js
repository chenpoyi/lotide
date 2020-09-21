// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  word = word.split(" ").join("");
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

module.exports = countLetters;
//TEST CODE

// let result = countLetters('ab    cc');
// console.log(result);
// assertEqual(result['a'],1);
// assertEqual(result['b'],1);
// assertEqual(result['c'],2);