// Write a function that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

function greaterThanTen(n) {
  return new Promise(function (resolve, reject) {
    if (n > 10) {
      resolve("greater than 10");
    } else {
      reject("less than 10");
    }
  });
}

greaterThanTen(1)
  .then(function (message) {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

greaterThanTen(12)
  .then(function (message) {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
