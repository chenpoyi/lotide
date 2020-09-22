const eqObjects = require('../eqObjects');
const { assert } = require("chai");

describe("##eqObjectsTest", () => {
  it("returns true for eqObjects(ab, ba)", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.equal(eqObjects(ab, ba), true); // => true
  });
  it("returns false for eqObjects(ab, abc)", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.equal(eqObjects(ab, abc), false);
  });
 
  it("returns false for eqObjects(cd, dc)", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "2" };
    assert.equal(eqObjects(cd, dc), false); // => false
  });
  it("returns false for eqObjects(cd, cd2)", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.equal(eqObjects(cd, cd2), false); // => false
  });
  it("returns true for eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
  });
});