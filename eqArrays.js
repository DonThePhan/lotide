// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) return false;

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) return false;
//   }
//   return true;
// };

const eqArrays = function(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;

	// check if any values in array don't match
	for (let i = 0; i < arr1.length; i++) {
		// if Array
		if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
			if (!eqArrays(arr1[i], arr2[i])) {
				return false;
			}
		} else if (arr1[i] !== arr2[i]) {
			// if values don't match
			return false;
		}
	}

	// all good!
	return true;
};

const assertEqual = function(actual, expected) {
	if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(eqArrays([ 1, 2, 3 ], [ 1, 2, 3 ]), true);
assertEqual(eqArrays([ 1, 2, 3 ], [ 2, 2, 3 ]), true);
assertEqual(eqArrays([ '1', '2', [ 1, 2, [ 3, 7, 3 ], 4 ] ], [ '1', '2', '3' ]), true);
assertEqual(eqArrays([ '1', '2', [ 1, 2, [ 3, 7, 3 ], 4 ] ], [ '1', '2', 3 ]), true);
