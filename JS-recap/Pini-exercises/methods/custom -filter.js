function myFilter(array, callback) {
  if (typeof callback === "function") {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array) == true) {
        newArr.push(array[i]);
      }
    }

    return newArr;
  } else {
    return "Callback is not a function";
  }
}
