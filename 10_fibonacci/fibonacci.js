const fibonacci = function(pos) {
    if (pos == 1) {
        return 1;
    } else {
        --pos;
    }
    let total = 0;
    let prev = 0;
    let next = 1;
    for (i = 0; i < pos; i ++) {
        total = next + prev;
        prev = next;
        next = total;
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
