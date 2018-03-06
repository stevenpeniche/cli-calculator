const Calculator = require('./calculator.js');
const Program = require('commander');

Program
  .option('-a, --add', 'add numbers')
  .option('-s, --subtract', 'subtract numbers')
  .option('-m, --multiply', 'multiply numbers')
  .option('-d, --divide', 'divide numbers')
  .parse(process.argv);

const args = process.argv.slice(3);

const calculate = (operation, args) => {
  if(typeof operation === 'string' && Array.isArray(args)){
    return `Result -> ${Calculator[operation](args.map(item => Number(item)))}`
  } else {
    throw Error('Check the arguments passed into the calculate() method')
  };
};

if(Program.add) {
  console.log(calculate("add", args));
};
if(Program.subtract) {
  console.log(calculate("subtract", args));
};
if(Program.multiply) {
  console.log(calculate("multiply", args));
};
if(Program.divide) {
  console.log(calculate("divide", args));
};

module.exports.calculate = calculate;