
const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

//TEST CODE

describe("#letterPositions", () => {
  it("returns [0] for results['h']", () => {
    const results = letterPositions("hello");
    assert.deepEqual(results['h'], [0]);
  });
  it("returns [1] for results['e']", () => {
    const results = letterPositions("hello");
    assert.deepEqual(results['e'], [1]);
  });
 
  it("returns [2,3] for results['l']", () => {
    const results = letterPositions("hello");

    assert.deepEqual(results['l'], [2, 3]);
  });
  it("returns [4] for results['o']", () => {
    const results = letterPositions("hello");

    assert.deepEqual(results['o'], [4]);
  });
});



