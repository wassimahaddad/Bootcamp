// 1.1- Basic loop
//
// You are given this array:
// const words = ["one", "two", "three", "four", "five"];
//
// Loop over this array with the forEach method and console log each element and its index.

const words = ["one", "two", "three", "four", "five"];
words.forEach((word) => console.log(word, words.indexOf(word)));

// 1.2- ToNumber
//
// Create a function ToNumber that takes one argument an array.
// Return from the function a new array changing the strings of numbers to actual numbers. Use the forEach method to accomplish this

const numbers = ["1", "2", "3", "4", "5"];
const ToNumber = (arr) => {
  let newArr = [];
  arr.forEach((item) => (item = newArr.push(parseInt(item))));
  return newArr;
};

// 1.3-Fruits
//
// You are given this array of fruits:
//
// const fruits = ["mango", "papaya", "pineapple", "apple"];
//
// Loop over this array with the forEach method and console log this
// sentence : “I am eating a <fruit name>”. But if the fruit is an apple. You
// need to console log “I am eating an Apple.
// Notice we changed the “a” to “an”.

const fruits = ["mango", "papaya", "pineapple", "apple"];
fruits.forEach((fruit) =>
  fruit == "apple"
    ? console.log(`I am eating an ${fruit}`)
    : console.log(`I am eating a ${fruit}`)
);

// 1.4- Mutate the array
//
// You are given this array of numbers:
//
// const numbers = [1, 2, 3, 4, 5];
//
// Iterate over this array with the forEach method. With the help of the third argument of the forEach method (which is the array you are looping over) mutate the array that every number double value.

const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((value, i, arr) => (arr[i] = value * 2));
console.log(numbers2);
