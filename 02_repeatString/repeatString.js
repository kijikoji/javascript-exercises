const repeatString = function(word, repeatAmount = 0) {
    if(repeatAmount < 0){
        return 'ERROR';
    }
    wordWordWord = "";

    for(;repeatAmount > 0; repeatAmount--) {
        wordWordWord += word;
    }
    return wordWordWord;
};

// Do not edit below this line
module.exports = repeatString;
