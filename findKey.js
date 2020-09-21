// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};



const findKey = function(obj, callback) {
  let result = '';
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }

  

  return result;
};

module.exports = findKey;
// const obj1 = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };
// const result1 = findKey(obj1, x => x.stars === 2); //"noma"
// const result2 = findKey(obj1, x => x.stars === 3); //"Akaleri"

// assertEqual(result1, "noma");
// assertEqual(result2, "Akaleri");