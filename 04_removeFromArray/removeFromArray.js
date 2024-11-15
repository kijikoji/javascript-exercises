const removeFromArray = function (array) {
    toBeRemoved = Array.prototype.slice.call(arguments, 1);
    console.log(toBeRemoved);
    newArray = [];
    for (i = 0; i < array.length; i++) {
      console.log(i);
      remove = false;
      for (item in toBeRemoved) {
        console.log(' array', array[i], 'the item is', toBeRemoved[item]);
        if (array[i] == toBeRemoved[item] && typeof(array[i]) == typeof(toBeRemoved[item])) {
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
