const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

//TEST CODE
describe("#eqArrays", () => {
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
  });
  it("returns false for eqArrays([1, 2], [1, 2, 3])", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.equal(eqArrays([1, 2], [1, 2, 3]), false);
  });
 
  it("returns false for eqArrays([1, 2, 3], [1, 2, '3']))", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "2" };
    assert.equal(eqArrays([1, 2, 3], [1, 2, "3"]), false); // => false
  });
  it("returns false for eqArrays([1, 2, '3'], [1, 2, 3])", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.equal(eqArrays([1, 2, "3"], [1, 2, 3]), false); // => false
  });
  
});
