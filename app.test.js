const sum = require('./app');

test('adds two numbers, returns result', () => {
  expect(sum(1,2)).toBe(3);
});