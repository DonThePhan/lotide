const assertEqual = require('./assertEqual')

const countLetters = function(str) {
	let result = {};
	let array = str.replace(/ /g, '').toLowerCase().split('');
	for (let char of array) {
		if (result[char]) result[char] += 1;
		else result[char] = 1;
	}

	return result;
};

module.exports = countLetters

// assertEqual(countLetters('LHL'), { l: 2, h: 1 });
// assertEqual(countLetters('lighthouse in the house'), {
// 	l: 1,
// 	i: 2,
// 	g: 1,
// 	h: 4,
// 	t: 2,
// 	o: 2,
// 	u: 2,
// 	s: 2,
// 	e: 3,
// 	n: 1
// });
