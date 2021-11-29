// const assertArraysEqual = require('../assertArraysEqual');

// //Should FAIL
// assertArraysEqual(middle([ 1, 2, 3, 4 ]), [ 2 ]);
// assertArraysEqual(middle([ 1, 2, 3, 4, 5, 6 ]), [ 3, 3 ]);
// assertArraysEqual(middle([ 1, 2 ]), [ 1 ]);
// assertArraysEqual(middle([ 1 ]), [ 'e' ]);

// //Should PASS
// assertArraysEqual(middle([ 1, 2, 3, 4 ]), [ 2, 3 ]);
// assertArraysEqual(middle([ 1, 2, 3, 4, 5, 6 ]), [ 3, 4 ]);
// assertArraysEqual(middle([ 1, 2 ]), []);
// assertArraysEqual(middle([ 1 ]), []);

const assert = require('chai').assert;
const middle = require('../middle');

describe(`#middle`, () => {
  it(`should return [ 3, 4 ] for [ 1, 2, 3, 4, 5, 6 ]`, () => {
    assert.deepEqual(middle([ 1, 2, 3, 4, 5, 6 ]), [ 3, 4 ]);
  });
  it(`should return [ 2, 3 ] for [ 1, 2, 3, 4 ]`, () => {
    assert.deepEqual(middle([ 1, 2, 3, 4 ]), [ 2, 3 ]);
  });
  it(`should return [] for [ 1, 2 ]`, () => {
    assert.deepEqual(middle([ 1, 2 ]), []);
  });
  it(`should return [] for [1]`, () => {
    assert.deepEqual(middle([ 1 ]), []);
  });
});
