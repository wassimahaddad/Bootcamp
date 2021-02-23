//1. Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled.

const arr = [1, 2, 3, 4, 5];
const doubleValues = (el) => el * 2;
const doubled = arr.map(doubleValues);
console.log(doubled);

//2. Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const onlyEvenValues = (item, i, a) => item % 2 != 0 && a.splice(i, 1);

numbers.forEach(onlyEvenValues);
console.log(numbers);

//3. Write a function called showFirstAndLast which accepts an array as an argument and returns a new array with only the first and last elements from the function’s argument array. The returned array should only contain elements that are strings

// const itemList = ["one", "two", "three", "four", "five"];

function showFirstAndLast(arr) {
  const newArr = [];
  arr.forEach((item, i, arr) => {
    if (typeof item === "string") {
      newArr.push(item);
    }
  });

  const newArr2 = [];
  newArr2.push(newArr[0], newArr[newArr.length - 1]);
  return newArr2;
}

console.log(
  showFirstAndLast([
    "a",
    1,
    2,
    3,
    "d",
    1,
    2,
    "one",
    1,
    200,
    "b",
    [1, 2, 3],
    1,
    "three",
  ])
);

//4. Write a function called vowelCount which accepts a string as an argument. The function should return an objectwhich has the count of the number of vowel’s that are in the string. The key should be the vowel and the value should be the count. e.g. {a:3, o:2,u:4}.Should not be case sensitive.

function vowelCount(str) {
  let letterArr = str.toLowerCase().split("");
  let letterObj = {};
  let vowels = "aeiou";
  letterArr.forEach(function (letter) {
    if (vowels.indexOf(letter) !== -1) {
      if (letterObj[letter] !== undefined) {
        letterObj[letter]++;
      } else {
        letterObj[letter] = 1;
      }
    }
  });
  return letterObj;
}

//5. Write a function capitalize that takes a string as an argument and will return the whole string capitalized.

function capitalize(str) {
  return str
    .split("")
    .map((letter) => letter.toUpperCase())
    .join("");
}

//6. Write a function called shiftLetters that takes a string as an argument and return’s an encoded string with each letter shifted down the alphabet by one.

function shiftLetters(str) {
  return str
    .split("")
    .map((letter) => String.fromCharCode(letter.charCodeAt() + 1))
    .join("");
}

//7. Create a function called swapCase that takes a string as an argument and returns a string that every other word is capitalized. (you can use the fifth’s exercise's function to keep it dry)

function swapCase(str) {
  arr = str.split(" ");
  return arr
    .map((item, i) => (i % 2 !== 0 ? capitalize(item) : item))
    .join(" ");
}
