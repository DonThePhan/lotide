const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe('#countLetters', () => {
  it(`given 'LHL', returns { l: 2, h: 1 }`, () => {
    assert.deepEqual(countLetters('LHL'), { l: 2, h: 1 });
  });
  it(`given 'lighthouse in the house', returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }`, () => {
    assert.deepEqual(countLetters('lighthouse in the house'), {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1
    });
  });
});
