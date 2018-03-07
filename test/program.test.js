const calculate = require('../lib/program.js').calculate;

describe('calculate', () => {
  it('adds', () => {
    expect(calculate('add', [2, 2, 2])).toBe('Result -> 6')
  });

  it('subtracts', () => {
    expect(calculate('subtract', [10, 5, 2])).toBe('Result -> 3')
  });

  it('multiplies', () => {
    expect(calculate('multiply', [2, 2, 2])).toBe('Result -> 8')
  });

  it('divides', () => {
    expect(calculate('divide', [50, 2, 5])).toBe('Result -> 5')
  });

  it('throws an error is invalid arguements are passed', () => {
    expect(() => calculate(2, '[2, 2, 2]')).toThrow('Check the arguments passed into the calculate() method');
  });
})

