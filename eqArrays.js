

const eqArrays = function(first, second) {
  //check if first and second arrays are of the same length
  if (first.length !== second.length) {
    return false;
  }
  //Loop through each element of both arrays and compare.
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      if (!eqArrays(first[i] , second[i])) {
        return false;
      }
      //return false if mismatch
    }
  }
  return true; //return true if all matches
};

module.exports = eqArrays;