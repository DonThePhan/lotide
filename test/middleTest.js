const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Should PASS
assertArraysEqual(middle([ 1, 2, 3, 4 ]), [ 2, 3 ]);
assertArraysEqual(middle([ 1, 2, 3, 4, 5, 6 ]), [ 3, 4 ]);
assertArraysEqual(middle([ 1, 2 ]), []);
assertArraysEqual(middle([ 1 ]), []);

//Should FAIL
assertArraysEqual(middle([ 1, 2, 3, 4 ]), [ 2 ]);
assertArraysEqual(middle([ 1, 2, 3, 4, 5, 6 ]), [ 3, 3 ]);
assertArraysEqual(middle([ 1, 2 ]), [ 1 ]);
assertArraysEqual(middle([ 1 ]), [ 'e' ]);
