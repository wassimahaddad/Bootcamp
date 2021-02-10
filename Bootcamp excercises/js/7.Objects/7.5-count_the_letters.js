const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "s",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let splitArr = [];
let tempArr = [];
let result = {};
let str;

for (let a = 0; a < array.length; a++) {
  array[a] = array[a].replace(/\s/g, "");
  array[a] = array[a].toLowerCase();
  tempArr = array[a].split("");
  splitArr = splitArr.concat(tempArr);
}

splitArr.sort();
let c = 0;
for (let a = 0; a < letters.length; a++) {
  for (let b = 0; b < splitArr.length; b++) {
    if (letters[a] === splitArr[b]) {
      c = c + 1;
      b = b + 1;
    } else {
      b = b + 1;
    }
    str = letters[a];
    result[str] = c;
  }
  a = a + 1;
}

console.log(splitArr);
console.log(result);
