const assertEqual = require('./assertEqual')

function findKey(object, callback) {
	for (let key of Object.keys(object)) {
		if (callback(object[key])) return key;
	}
}

module.exports = findKey

// let results = findKey(
// 	{
// 		'Blue Hill': { stars: 1 },
// 		Akaleri: { stars: 3 },
// 		noma: { stars: 2 },
// 		elBulli: { stars: 3 },
// 		Ora: { stars: 2 },
// 		Akelarre: { stars: 3 }
// 	},
// 	(x) => x.stars === 2
// ); // => "noma"

// let results2 = findKey({ 1: 1, 2: 3 }, (x) => x === 3);

// assertEqual(results, 'noma'); // PASS
// assertEqual(results, 'Blue Hill'); // FAIL
// assertEqual(results, 'Should'); // FAIL

// assertEqual(results2, '2'); // PASS
