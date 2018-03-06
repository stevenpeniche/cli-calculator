class Calculator {
  add(numbers) {
    if(numbers.every(item => typeof item === 'number')) {
      return numbers.reduce((acc,cur) => acc + cur)
    } else {
      throw Error('All arguments must be numbers')
    }
  }

  subtract(numbers) {
    if(numbers.every(item => typeof item === 'number')) {
      return numbers.reduce((acc,cur) => acc - cur)
    } else {
      throw Error('All arguments must be numbers')
    }
  }

  multiply(numbers) {
    if(numbers.every(item => typeof item === 'number')) {
      return numbers.reduce((acc,cur) => acc * cur)
    } else {
      throw Error('All arguments must be numbers')
    }
  }

  divide(numbers) {
    if(numbers.every(item => typeof item === 'number')) {
      return numbers.reduce((acc,cur) => acc / cur)
    } else {
      throw Error('All arguments must be numbers')
    }
  }
}

module.exports = new Calculator;