const findKey = require("./findKey");

const assertEqual = require('./assertEqual')

const findKeyByValue = function(object, searchValue) {
  for (const [key, value] of Object.entries(object)) {
    if (value === searchValue) return key;
  }
  return undefined;
};

module.exports = findKeyByValue

// const bestTVShowsByGenre = {
//   'sci_fi': "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // expected PASS
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama"); //expected FAIL
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); // expected PASS
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // expected PASS