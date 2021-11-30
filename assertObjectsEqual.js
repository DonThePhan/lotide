const assertEqual = require('./assertEqual')
const eqObjects = require('./eqObjects')

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {

  const inspect = require('util').inspect

  if (eqObjects(actual, expected)) console.log(`✅✅✅ Assertion PASSED: ${inspect(actual)} === ${inspect(expected)}`);
	else console.log(`🛑🛑🛑 Assertion FAILED: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual

// const ab = { a: '1', b: '2' };
// const ba = { b: '2', a: '1' };
// assertObjectsEqual(ab, ba); // => true

// const abc = { a: '1', b: '2', c: '3' };
// assertObjectsEqual(ab, abc); // => false

// const cd = { c: '1', d: [ '2', 3 ] };
// const dc = { d: [ '2', 3 ], c: '1' };
// assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: '1', d: [ '2', 3, 4 ] };
// assertObjectsEqual(cd, cd2); // => false
