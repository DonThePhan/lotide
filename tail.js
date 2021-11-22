const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

const tail = function(array) {
  let newArray = array.slice(1);

  //assertion to assert if original array was modified by making sure the new array is not the same as the original array
  assertEqual(array.length, newArray.length + 1);
  return array.slice(1);
};
 
// Test Case: Check the original array
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // original array should still have 3 elements!
