const takeUntil = require('./takeUntil');

const without = function(source, itemsToRemove) {
  let withoutArray = [];

  //populate withoutArray with values of source & itemsToRemove that don't match
  for (let i = 0; i < source.length; i++) {
    let remove = false;

    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) remove = true;
    }
    if (!remove) withoutArray.push(source[i]);
  }

  return withoutArray;

  // Easier method...
  // return source.filter(element => {
  //   if (itemsToRemove.includes(element)) return false
  //   return true
  // })
};

module.exports = takeUntil;

// const assertArraysEqual = function(source, itemsToRemove) {
//   console.log('without', without(source, itemsToRemove));
//   console.log('source', source, '\n'); //test original source is unmodified
// };

// assertArraysEqual([ 1, 2, 3 ], [ 2, 3 ]);
// assertArraysEqual([ 1, 2, 3 ], [ 3 ]);
// assertArraysEqual([ '1', '2', '3' ], [ '3' ]);
// assertArraysEqual([ '1', '2', '3' ], [ '1', 3 ]);
