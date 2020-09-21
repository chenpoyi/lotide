const assertArraysEqual = require('../assertArraysEqual');
//TEST CODE
const first = [1,2,3];
const second = [1,2,3];
const third = [1,2,'3'];
assertArraysEqual(first, second); //SHOULD PASS
assertArraysEqual(first, third); //SHOULD FAIL