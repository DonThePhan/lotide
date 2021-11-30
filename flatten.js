const flatten = function(array, memo = []) {
  for (let element of array) {
    if (Array.isArray(element)) flatten(element, memo);
    else memo.push(element);
  }
  return memo;
};

module.exports = flatten

// console.log(flatten([ 1, 2, [ 3, [ 1, 2, [ 2, [ 1, 5, 7 ], 8, 4 ] ] ], 5, [ 6 ] ]));
