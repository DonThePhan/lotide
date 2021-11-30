const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');

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

module.exports = letterPositions;

// assertObjectsEqual(letterPositions('hello world'), {
//   h: [ 0 ],
//   e: [ 1 ],
//   l: [ 2, 3, 9 ],
//   o: [ 4, 7 ],
//   w: [ 6 ],
//   r: [ 8 ],
//   d: [ 10 ]
// });
