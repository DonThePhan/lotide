const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion PASSED: ${JSON.stringify(array1)} === ${JSON.stringify(array2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion FAILED: ${JSON.stringify(array1)} !== ${JSON.stringify(array2)}`);
  }
};

assertArrayEqual([ 1, 2, 3 ], [ 1, 2, 3 ]);
assertArrayEqual([ 1, 2, 3 ], [ 2, 2, 3 ]);
assertArrayEqual([ '1', '2', '3' ], [ '1', '2', '3' ]);
assertArrayEqual([ '1', '2', '3' ], [ '1', '2', 3 ]);