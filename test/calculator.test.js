const Calculator = require('../lib/calculator.js');

describe('add', () => {
  it('adds two numbers', () => {
    expect(Calculator.add([2, 2])).toBe(4);
  });

  it('adds more than two numbers', () => {
    expect(Calculator.add([2, 2, 2, 2])).toBe(8);
  });

  it('throws an error if a number isn\'t passed', () => {
    expect(() => Calculator.add([2, 2, 'hello', 2])).toThrow('All arguments must be numbers');
  });
});

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(Calculator.subtract([4, 2])).toBe(2);
  });

  it('subtracts more than two numbers', () => {
    expect(Calculator.subtract([20, 10, 5])).toBe(5);
  });

  it('throws an error if a number isn\'t passed', () => {
    expect(() => Calculator.subtract([20, 10, 'hello'])).toThrow('All arguments must be numbers');
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(Calculator.multiply([5, 5])).toBe(25);
  });

  it('multiplies more than two numbers', () => {
    expect(Calculator.multiply([10, 10, 2])).toBe(200);
  });

  it('throws an error if a number isn\'t passed', () => {
    expect(() => Calculator.multiply([10, 10, 'hello'])).toThrow('All arguments must be numbers');
  });
});

describe('divide', () => {
  it('divides two numbers', () => {
    expect(Calculator.divide([25, 5])).toBe(5);
  });

  it('divides more than two numbers', () => {
    expect(Calculator.divide([200, 2, 10])).toBe(10);
  });

  it('throws an error if a number isn\'t passed', () => {
    expect(() => Calculator.divide([200, 2, 'hello'])).toThrow('All arguments must be numbers');
  });
});