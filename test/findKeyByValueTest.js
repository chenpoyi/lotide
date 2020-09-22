
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

//TEST CODE

describe("#letterPositions", () => {
  it("returns 'drama' for findKeyByValue(bestTVShowsByGenre, 'The Wire')", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for findKeyByValue(bestTVShowsByGenre, 'That '70s Show'), undefined", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
 

});

