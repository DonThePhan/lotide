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
