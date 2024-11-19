const palindromes = function (word) {
    const mid = Math.round(word.length / 2,);
    for (i = 0, j = word.length - 1; i <= mid; i++, j--) {
        if (word[i] != word[j]) {
        return false;
        }
    }
    return true;
};
// Do not edit below this line
module.exports = palindromes;
