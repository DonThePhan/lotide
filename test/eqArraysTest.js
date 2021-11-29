const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

assertEqual(eqArrays([ 1, 2, 3 ], [ 1, 2, 3 ]), true);
assertEqual(eqArrays([ 1, 2, 3 ], [ 2, 2, 3 ]), false);
assertEqual(eqArrays([ '1', '2', [ 1, 2, [ 3, 7, 3 ], 4 ] ], [ '1', '2', [ 1, 2, [ 3, 7, 3 ], 4 ] ]), true);
assertEqual(eqArrays([ '1', '2', [ 1, 2, [ 3, 7, 3 ], 4 ] ], [ '1', '2', [ 1, 2, [ 3, 7, 3 ], 5 ] ]), false);