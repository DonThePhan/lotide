const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

// const assertArraysEqual = function(array1, array2) {
// 	if (eqArrays(array1, array2)) {
// 		console.log(`✅✅✅ Assertion PASSED: ${JSON.stringify(array1)} === ${JSON.stringify(array2)}`);
// 	} else {
// 		console.log(`🛑🛑🛑 Assertion FAILED: ${JSON.stringify(array1)} !== ${JSON.stringify(array2)}`);
// 	}
// };

const eqObjects = function(object1, object2) {
  let equal = true;
  
  for (let key of Object.keys(object1)) {
    if (!object2[key]) return false;
    if (!eqArrays(object1[key], object2[key])) {
      equal = false;
    }
  }
  return equal;
};

const assertObjectsEqual = function(object1, object2) {
  let equal = eqObjects(object1, object2);
  if (equal) console.log(`✅✅✅ Assertion PASSED: ${JSON.stringify(object1)} === ${JSON.stringify(object2)}`);
  else console.log(`🛑🛑🛑 Assertion FAILED: ${JSON.stringify(object1)} !== ${JSON.stringify(object2)}`);
};

const letterPositions = function(sentence) {
  const results = {};

  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      //pass
    } else if (results[sentence[i]]) results[sentence[i]].push(i);
    else results[sentence[i]] = [ i ];
  }
  return results;
};

assertObjectsEqual(letterPositions('hello world'), {
  h: [ 0 ],
  e: [ 1 ],
  l: [ 2, 3, 9 ],
  o: [ 4, 7 ],
  w: [ 6 ],
  r: [ 8 ],
  d: [ 10 ]
});
