const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it(`given eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), returns true`, () => {
    let result = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    assert.strictEqual(result, true);
  });

  it(`given eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), returns false`, () => {
    let result = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    assert.strictEqual(result, false);
  });

  it(`given eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), returns true`, () => {
    let result = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 });
    assert.strictEqual(result, false);
  });

  it(`given eqObjects({ a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 }, { a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 }), returns true`, () => {
    let result = eqObjects(
      { a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 },
      { a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 }
    );
    assert.strictEqual(result, true);
  });

  it(`given eqObjects({ a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 3 }, { a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 }), returns false`, () => {
    let result = eqObjects(
      { a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 3 },
      { a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 }
    );
    assert.strictEqual(result, false);
  });

  it(`given eqObjects({ a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 3 }, { a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 }
        );), returns false`, () => {
    let result = eqObjects(
      { a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 3 },
      { a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 }
    );
    assert.strictEqual(result, false);
  });
});
