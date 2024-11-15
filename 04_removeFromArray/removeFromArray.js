const removeFromArray = function(array, toBeRemoved) {
    newArray = [];
    for(i = 0; i < array.length; i++){
        if(array[i] != toBeRemoved){
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
