// FUNCTION IMPLEMENTATION




const tail = function(array) {
  if (array.length > 1) {
    const newArray = array.slice(1);
    return newArray;
  } else {
    return [];
  }
  
};

module.exports = tail;

