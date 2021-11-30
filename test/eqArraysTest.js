const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it(`given eqArrays([ 1, 2, 3 ], [ 1, 2, 3 ]), returns true`, () => {
    let result = eqArrays([ 1, 2, 3 ], [ 1, 2, 3 ]);
    assert.strictEqual(result, true);
  });
  it(`given eqArrays([ 1, 2, 3 ], [ 2, 2, 3 ]), returns false`, () => {
    let result = eqArrays([ 1, 2, 3 ], [ 2, 2, 3 ]);
    assert.strictEqual(result, false);
  });
  it(`given eqArrays([ '1', '2', [ 1, 2, [ 3, 7, 3 ], 4 ] ], [ '1', '2', [ 1, 2, [ 3, 7, 3 ], 4 ] ]), returns true`, () => {
    let result = eqArrays([ '1', '2', [ 1, 2, [ 3, 7, 3 ], 4 ] ], [ '1', '2', [ 1, 2, [ 3, 7, 3 ], 4 ] ]);
    assert.strictEqual(result, true);
  });
  it(`given eqArrays([ '1', '2', [ 1, 2, [ 3, 7, 3 ], 4 ] ], [ '1', '2', [ 1, 2, [ 3, 7, 3 ], 5 ] ]), returns false`, () => {
    let result = eqArrays(['1', '2', [1, 2, [3, 7, 3], 4]], ['1', '2', [1, 2, [3, 7, 3], 5]]);
    assert.strictEqual(result, false);
  });
});
