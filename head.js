const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: === ${expected}`);
  else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

const tail = function (array) {
  return array[0]
}
 
assertEqual(tail([5,6,7]), 5);
assertEqual(tail([]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail(["Hi", "Lighthouse", "Labs"]), "Hello");
