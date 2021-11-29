assertEqual = require('../assertEqual');

assertEqual('Lighthouse Labs', 'Bootcamp'); // FAIL
assertEqual('Hello World!', 'Hello World!'); // PASS
assertEqual(1, 2); // FAIL
assertEqual(1, 1); // PASS
