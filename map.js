const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  let results = [];
  for (let element of array) {
    results.push(callback(element));
  }

  return results;
  // empty for now :)
};

module.exports = map;

// const words1 = ["ground", "control", "to", "major", "tom"];
// const words2 = ["hello", "goodbye", "world"];

// function firstLetter(word) {
//   return word[0]
// }

// assertArraysEqual(map(words1, firstLetter), [ 'g', 'c', 't', 'm', 't' ])
// assertArraysEqual(map(words2, firstLetter), [ 'h', 'g', 'w'])
