const removeFromArray = function (array) {
    toBeRemoved = Array.prototype.slice.call(arguments, 1);
    newArray = [];

    for (i = 0; i < array.length; i++) {
      remove = false;

      for (item in toBeRemoved) {
        if (array[i] == toBeRemoved[item]) {
          remove = true;
        }
      }

      if (!remove) {
        newArray.push(array[i]);
      }
    }
    
    return newArray;
  };

// Do not edit below this line
module.exports = removeFromArray;
