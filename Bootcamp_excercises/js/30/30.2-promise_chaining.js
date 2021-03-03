// Write two functions that use Promises that you can chain.
//
// The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order.
//
// If the array contains anything but strings, it should throw an error.
//
// Call the functions once with an array of words and call it once with an array that includes at least one item that is not a word. Print the resolve and reject in a .then, .catch.

function makeAllCaps(arr) {
  return new Promise(function (resolve, reject) {
    const regExChar = /[a-zA-z]/g;
    let notChar = 0;
    for (let i = 0; i < arr.length; i++) {
      if (!regExChar.test(arr[i])) {
        notChar = i;
      } else {
        arr[i] = arr[i].toUpperCase();
      }
    }
    if (notChar !== 0) {
      setTimeout(
        () => reject(`Array conatins non-words at index [${notChar}]`),
        1000
      );
    } else {
      setTimeout(() => resolve(arr), 1000);
    }
  });
}

// -------------------------------------------------------------->

function sortWords(arr) {
  return new Promise(function (resolve, reject) {
    const regExChar = /[a-zA-z]/g;
    let notChar = 0;
    for (let j = 0; j < arr.length; j++) {
      if (!regExChar.test(arr[j])) {
        notChar = j;
      } else {
        notChar = notChar;
      }
    }
    if (notChar !== 0) {
      setTimeout(
        () => reject(`Array conatins non-words at index [${notChar}]  `),
        1000
      );
    } else {
      arr = arr.sort();

      setTimeout(() => resolve(arr), 1000);
    }
  });
}

makeAllCaps(["one", "two", "three", "four"])
  .then(function (res) {
    console.log(res);
    return sortWords(res);
  })
  .then(function (res) {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

makeAllCaps(["one", "two", 1, "three", "four"])
  .then(function (res) {
    console.log(res);
    return sortWords(res);
  })
  .then(function (res) {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
