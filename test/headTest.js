const head = require('../head');

// const assertEqual = require('../assertEqual');
// assertEqual(head([ 5, 6, 7 ]), 5);
// assertEqual(head([]), 5);
// assertEqual(head([ 'Hello', 'Lighthouse', 'Labs' ]), 'Hello');
// assertEqual(head([ 'Hi', 'Lighthouse', 'Labs' ]), 'Hello');

const assert = require('chai').assert;

describe('#head', () => {
  it('should return 5 for [5, 6, 7]', () => {
    assert.strictEqual(head([ 5, 6, 7 ]), 5);
  });
  it('should return undefined for []', () => {
    assert.strictEqual(head([]), undefined);
  });
  it(`should return 'hello' for [ 'Hello', 'Lighthouse', 'Labs' ]`, () => {
    assert.strictEqual(head([ 'Hello', 'Lighthouse', 'Labs' ]), 'Hello');
  });
  it(`should return 'Hi' for [ 'Hi', 'Lighthouse', 'Labs' ]`, () => {
    assert.strictEqual(head([ 'Hi', 'Lighthouse', 'Labs' ]), 'Hi');
  });
});