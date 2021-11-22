const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: === ${expected}`);
  else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

 
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Hello World!", "Hello World!");
assertEqual(1,2);
assertEqual(1,1);
