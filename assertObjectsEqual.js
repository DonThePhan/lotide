const assertEqual = function(actual, expected) {
	if (actual === expected) console.log(`✅✅✅ Assertion PASSED: ${actual} === ${expected}`);
	else console.log(`🛑🛑🛑 Assertion FAILED: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {
	if (array1.length !== array2.length) return false;

	for (let i = 0; i < array1.length; i++) {
		if (array1[i] !== array2[i]) return false;
	}
	return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
	//check keys are same length
	if (Object.keys(object1).length !== Object.keys(object2).length) return false;

	// loop through all keys
	for (let key in object1) {
		//check if Array both are Arrays
		if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
			// check if arrays Equal
			if (!eqArrays(object1[key], object2[key])) return false;
		} else if (object1[key] !== object2[key]) return false;
	}
	return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {

  const inspect = require('util').inspect

  if (eqObjects(actual, expected)) console.log(`✅✅✅ Assertion PASSED: ${inspect(actual)} === ${inspect(expected)}`);
	else console.log(`🛑🛑🛑 Assertion FAILED: ${inspect(actual)} !== ${inspect(expected)}`);
};

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertObjectsEqual(ab, ba); // => true

const abc = { a: '1', b: '2', c: '3' };
assertObjectsEqual(ab, abc); // => false

const cd = { c: '1', d: [ '2', 3 ] };
const dc = { d: [ '2', 3 ], c: '1' };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: '1', d: [ '2', 3, 4 ] };
assertObjectsEqual(cd, cd2); // => false
