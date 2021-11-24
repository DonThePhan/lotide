// TEST/ASSERTION FUNCTIONS --------------------------
const eqArrays = function(array1, array2) {
	if (array1.length !== array2.length) return false;

	for (let i = 0; i < array1.length; i++) {
		if (array1[i] !== array2[i]) return false;
	}
	return true;
};

const assertArraysEqual = function(original, expected) {
	if (eqArrays(middle(original), expected)) {
		console.log(`✅✅✅ Assertion PASSED: ${JSON.stringify(middle(original))} === ${JSON.stringify(expected)}`);
	} else {
		console.log(`🛑🛑🛑 Assertion FAILED: ${JSON.stringify(middle(original))} !== ${JSON.stringify(expected)}`);
	}
};

// ACTUAL FUNCTION ----------------------------------
const middle = function(array) {
	if (array.length <= 2) return [];

	let midIndex = Math.floor((array.length - 1) / 2);

	if (array.length % 2 === 0) return array.slice(midIndex, midIndex + 2);
	else return array.slice(midIndex, midIndex + 1);
};

//Should Pass
assertArraysEqual([ 1, 2, 3, 4 ], [ 2, 3 ]);
assertArraysEqual([ 1, 2, 3, 4, 5, 6 ], [ 3, 4 ]);
assertArraysEqual([ 1, 2 ], []);
assertArraysEqual([1], []);

//Should Fail
assertArraysEqual([ 1, 2, 3, 4 ], [ 2 ]);
assertArraysEqual([ 1, 2, 3, 4, 5, 6 ], [ 3, 3 ]);
assertArraysEqual([ 1, 2 ], [1]);
assertArraysEqual([ 1 ], ['e']);
