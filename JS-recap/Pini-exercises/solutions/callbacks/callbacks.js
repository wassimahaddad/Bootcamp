// 1.1 – Evening greeting
// Create a function called quotation that receives two arguments, a name
// and a callback.
// e.g. function quotation(name,callback){}
// This function should take your name and put them in quotes.
// E.g. Timmy = “Timmy”.
// You should call your callback function with the modified name.
// Make sure to check that your callback is actually a function. If it is not
// return the modified name.
// If it is a callback, return the value you get from your callback.
// The callback should print the name to the console as follows:
// Good evening “Timmy”.

const quotation = (name, callback) => {
  const result = `"${name}"`;
  if (typeof callback === "function") {
    return callback(result);
  } else {
    return result;
  }
};
const eveningGreeting = (name) => console.log(`Good evening ${name}!`);
console.log(quotation("Pini", eveningGreeting));

// 1.2 - simple math callbacks
// You are provided with this array of numbers:
const numbers = [1, 100, 67, -5, 6784, 356, 200];
// Create a function called addNumbers that receives two arguments an array
// and a callback.
// e.g. function addNumbers(arr,callback){}
// This function should add all the numbers together.
// Call your callback with the value result.
// Again, make sure to check that your callback is actually a function. If it is
// not, return the modified value.
// The callback should also accept two arguments, a sum, a length (length of
// the array) and a callback.
// This functions job is to take the sum and divide it by the length to get the
// average.
// This function also gets a callback as an argument.
// Again, make sure to check that your callback is actually a function. If it is
// not, return the modified value.
// If it is a function, call your callback that also receives two arguments a
// sum and a number.
// This function will modify your number to a decimal point.
// For example if your arguments are
// sum: 565.567456 and the number: 2
// The result you should get back is 565.56.

const numbers = [1, 100, 67, -5, 6784, 356, 200];

const addNumbers = (arr, callback) => {
  const result = arr.reduce((acc, el) => acc + el, 0);
  if (typeof callback === "function") {
    return callback(result, arr.length, roundSum);
  }
  return result;
};

const average = (sum, length, callback) => {
  const result = sum / length;
  if (typeof callback === "function") {
    return callback(result, 2);
  } else {
    return result;
  }
};
const roundSum = (sum, toDecimal) => {
  return sum.toFixed(toDecimal);
};
console.log(addNumbers(numbers, average));
