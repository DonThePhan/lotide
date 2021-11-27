// const eqObjects = function(object1, object2) {
// 	//check keys are same length
// 	if (Object.keys(object1).length !== Object.keys(object2).length) return false;

// 	// loop through all keys
// 	for (let key in object1) {
// 		//check if Array both are Arrays
// 		if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
// 			// check if arrays Equal
// 			if (!eqArrays(object1[key], object2[key])) return false;
// 		} else if (object1[key] !== object2[key]) return false;
// 	}
// 	return true;
// };

// const ab = { a: '1', b: '2' };
// const ba = { b: '2', a: '1' };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: '1', b: '2', c: '3' };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: '1', d: [ '2', 3 ] };
// const dc = { d: [ '2', 3 ], c: '1' };
// assertEqual(eqObjects(cd, dc), true); // => true

// ==========================================================================

const assertEqual = function(actual, expected) {
	if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// --------------------------------------------------------------------------

const eqArrays = function(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	// check if any values in array don't match
	for (let i = 0; i < arr1.length; i++) {
		// if Array
		if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
			if (!eqArrays(arr1[i], arr2[i])) {
				return false;
			}
			// if Object
		} else if (typeof arr1[i] === 'object' && typeof arr2[i] === 'object') {
			if (!eqObjects(arr1[i], arr2[i])) {
				return false;
			}
			// if values don't match
		} else if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	// all good!
	return true;
};

// --------------------------------------------------------------------------

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

// --------------------------------------------------------------------------

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

assertEqual(
	eqObjects(
		{ a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 },
		{ a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 }
	), true
); // => true

assertEqual(
	eqObjects(
		{ a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 3 }, // <-introduced error at end
		{ a: { z: [ 2, { f: { x: { y: [ 3, 4, 5, [ 12, { e: 5 }, 3, 5 ], 6 ] } } } ] }, b: 2 }
	), false
); // => false

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false