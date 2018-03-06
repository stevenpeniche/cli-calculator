const Calculator = require('./calculator.js');
const Program = require('commander');
const Chalk = require('chalk');

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
  console.log(Chalk.green(calculate("add", args)));
};
if(Program.subtract) {
  console.log(Chalk.green(calculate("subtract", args)));
};
if(Program.multiply) {
  console.log(Chalk.green(calculate("multiply", args)));
};
if(Program.divide) {
  console.log(Chalk.green(calculate("divide", args)));
};

module.exports.calculate = calculate;