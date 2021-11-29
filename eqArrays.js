const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  // check if any values in array don't match
  for (let i = 0; i < arr1.length; i++) {
    // if Array
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // recursive case: if value is an Array
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      // base case 1: if values don't match
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // base case 2: all good!
  return true;
};

module.exports = eqArrays
