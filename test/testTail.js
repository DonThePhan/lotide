const tail = require('../tail');
const assert = require('chai').assert;

// const assertEqual = require('../assertEqual');
// const result = tail(array);
// assertEqual(array.length, 3); // ensure we get back two elements
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], 'Lighthouse'); // ensure first element is "Lighthouse"
// assertEqual(result[1], 'Labs'); // ensure second element is "Labs"

describe('#tail', () => {
  it(`should return '['Hello', 'Lighthouse', 'Labs']' for ['Lighthouse', 'Labs']`, () => {
    const array = [ 'Hello', 'Lighthouse', 'Labs' ];
    assert.deepEqual(tail(array), [ 'Lighthouse', 'Labs' ]);
  });
});
