const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (a, b) => a / b;

const multiply = (a, b) => a * b;

const power = (a, b) => Math.pow(a, b);

const factorial = (a) => {
  let total = 1
  for (i = a; i > 1; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
