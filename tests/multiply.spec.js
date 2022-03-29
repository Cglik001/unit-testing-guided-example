const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  // Our tests will be added here.
  test("should multipy two positive integers correctly", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test("should multiply with a negative and a positive integer numbers correctly", () => {
    const result = multiply(-2, 4);
    expect(result).toBe(-8);
  });

  test("value returned should be 0, if multiply is called with any number and a number 0 ", () => {
    const result = multiply(2, 0 );
    expect(result).toBe(0);
  });
});
