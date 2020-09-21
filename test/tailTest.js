const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yoyo','Lighthouse','Labs']", () => {
    assert.deepEqual(tail(['Yoyo','Lighthouse','Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
  it("returns empty array for empty array", () => {
    assert.deepEqual(tail([]),[]);
  });
  
});
