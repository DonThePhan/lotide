const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case 1: Check the returned array elements
const array = [ 'Hello', 'Lighthouse', 'Labs' ]
const result = tail(array);
assertEqual(array.length, 3); // ensure we get back two elements
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], 'Lighthouse'); // ensure first element is "Lighthouse"
assertEqual(result[1], 'Labs'); // ensure second element is "Labs"
