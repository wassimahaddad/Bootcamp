//Write the following functions using the reduce built-in function.
// 1. max
const numbers = [3, 5, 7, 2, 33, 56, 3, 0, 554, 32, 43];

const max = numbers.reduce((acc, num) => (acc > num ? acc : num), numbers[0]);
console.log(max);

// 2. sum of even numbers

const evenSum = numbers.reduce(
  (acc, num) => (num % 2 === 0 ? (acc = acc + num) : (acc = acc)),
  0
);
console.log(evenSum);

// 3. average

const average = numbers.reduce(
  (acc, item, i, arr) => acc + item / arr.length,
  0
);
console.log(average);
