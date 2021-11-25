const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion PASSED: ${JSON.stringify(array1)} === ${JSON.stringify(array2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion FAILED: ${JSON.stringify(array1)} !== ${JSON.stringify(array2)}`);
  }
};


const map = function (array, callback) {
  let results = []
  for (let element of array) {
    results.push(callback(element))
  }
  
  return results
  // empty for now :)
}

const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = ["hello", "goodbye", "world"];

function firstLetter(word) {
  return word[0]
}

assertArraysEqual(map(words1, firstLetter), [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(map(words2, firstLetter), [ 'h', 'g', 'w'])