const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  console.log('OBJECT1: ',object1);
  console.log('OBJECT2: ', object2);
  console.log('KEY LENGTH 1: ', keys1.length);
  console.log('KEY LENGTH 2: ', keys2.length);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    console.log('TYPE 1: ', typeof object1[key]);
    console.log('TYPE 2: ', typeof object2[key]);
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {// checks if both values are arrays
      if (!eqArrays(object1[key], object2[key])) {//check if 2 arrays equal
        //return true;
      
        return false;
      }
   

    } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {//return false if 2 primitives are not equal
      //return true;
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  
  return true;

};

module.exports = eqObjects;
//TEST CODE
//Primitives
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);
// //Arrays
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "2" };
// assertEqual(eqObjects(cd, dc), false); // => false

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false


// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false); // => false