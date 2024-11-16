const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0 || num1 % 1 || num2 % 1) {
        return 'ERROR';
    }
    total = 0;
    if (num1 < num2) {
    } else {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }

    for (i = num1; i <= num2; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
