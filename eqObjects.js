const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  //check keys are same length
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  // loop through all Object keys
  for (let key in obj1) {
    // if Array
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
      // if Object
    } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
      // if values don't match
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }

  // all good!
  return true;
};

module.exports = eqObjects;

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

// assertEqual(
// 	eqObjects(
// 		{ a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 },
// 		{ a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 }
// 	), true
// ); // => true

// assertEqual(
// 	eqObjects(
// 		{ a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 3 }, // <-introduced error at end
// 		{ a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 }
// 	), false
// ); // => false

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
