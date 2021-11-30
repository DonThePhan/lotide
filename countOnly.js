const countLetters = require("./countLetters");
const assertEqual = require('./assertEqual')

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  
  // allItems: an array of strings that we need to look through
  for (let item of allItems) {
    
    // itemsToCount: an object specifying what to count
    if (itemsToCount[item]) {
			if (results[item]) results[item] += 1;
			else results[item] = 1;
		}
	}
	return results;
};

module.exports = countOnly
