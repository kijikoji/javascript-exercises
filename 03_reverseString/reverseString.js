const reverseString = function(word) {
    drow = "";
    text = word.split("");
    for(i = text.length - 1; i >= 0; i--){
        drow += text[i];
    }
    return drow;
};

// Do not edit below this line
module.exports = reverseString;
