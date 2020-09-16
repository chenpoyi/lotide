// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word){
  
  wordCount = {};
  for(let letter of word){
    if(wordCount[letter]){
      wordCount[letter]+=1;
    } else {
      wordCount[letter] = 1;
    }
  }
  return wordCount;
}
//TEST CODE
console.log(countLetters('Hello...'));