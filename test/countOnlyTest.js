const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#countOnly', () => {
  const firstNames = [ 'Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe' ];
  const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });

  it(`given countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false })['Jason'], returns 1`, () => {
    assert.strictEqual(result1['Jason'], 1);
  });

  it(`given countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false })['Karima'], returns undefined`, () => {
    assert.strictEqual(result1['Karima'], undefined);
  });

  it(`given countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false })['Fang'], returns 2`, () => {
    assert.strictEqual(result1['Fang'], 2);
  });

  it(`given countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false })['Agouhanna'], returns undefined`, () => {
    assert.strictEqual(result1['Agouhanna'], undefined);
  });
});

// // console.log(result1)

// assertEqual(result1['Jason'], 1);
// assertEqual(result1['Karima'], undefined);
// assertEqual(result1['Fang'], 2);
// assertEqual(result1['Agouhanna'], undefined);
