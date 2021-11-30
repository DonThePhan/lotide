// const eqArrays = require('./eqArrays');

// TODO why is it the test doesn't recognize the required eqArray above? I had to manually copy paste the function down below...(try running with the require instead and see for yourself!)

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (typeof arr1[i] === 'object' && typeof arr2[i] === 'object') {
      if (!eqObjects(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

console.log(eqArrays);

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  if (!eqArrays(Object.keys(obj1).sort(), Object.keys(obj2).sort())) {
    return false;
  }

  for (let key in obj1) {
    if (!obj2[key]) return false;

    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
