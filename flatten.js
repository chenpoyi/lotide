const flatten = function(array) {
  let result = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let subelement of element) {
        result.push(subelement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};

module.exports = flatten;
