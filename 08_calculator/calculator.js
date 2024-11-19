const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => array.reduce((sum, item) => {
  return sum += item
}, 0);

const multiply = (array) => array.reduce((sum, item) => {
  return sum *= item
}, 1);

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
