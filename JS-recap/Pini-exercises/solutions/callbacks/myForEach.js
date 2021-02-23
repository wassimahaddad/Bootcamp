// Create your own forEach method.
// Take the exercise 1.1- simple loop from the forEach section. Make sure
// you get the same results.

// 1.1- Basic loop
// You are given this array:
const words = ["one", "two", "three", "four", "five"];
// Loop over this array with the forEach method and console log each
// element and its index.

const myForEach = (arr, callback) => {
  if (typeof callback === "function") {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  } else return;
};
const log = (el, index, arr) => {
  console.log(el, index);
};
myForEach(words, log);
