function printToTenRev() {
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
}

//-----------------------------3---------------------------------

function printToN(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

//-----------------------------4---------------------------------
const printToTenIfRev = (n, isRev) => {
  if (isRev) {
    for (let i = n; i >= 0; i--) {
      console.log(i);
    }
  } else {
    for (let i = 0; i <= n; i++) {
      console.log(i);
    }
  }
};

//-----------------------------5---------------------------------

const printEven = () => {
  for (let i = 0; i <= 30; i = i + 2) {
    console.log(i);
  }
};
//-----------------------------6---------------------------------

const printDevByn = (n, d) => {
  for (let i = 0; i <= n; i = i + d) {
    console.log(i);
  }
};

//-----------------------------7---------------------------------

// shift, unshift, pop, push diagram table
// https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript

const printArr = (arr) => {
  for (let i; i < arr.lenth; i++) {
    consile.log(arr[i]);
  }
};
//-----------------------------8---------------------------------
const printArrDivByn = (arr, n) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % n == 0) {
      console.log(arr[i]);
    }
  }
};

//-----------------------------9---------------------------------

const arrStringLength = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].length);
  }
};

//-----------------------------10---------------------------------

const sumArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

//-----------------------------11---------------------------------

const countEvenArr = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count++;
    }
  }
  return count;
};

//-------------------------------Not-in-pdf-----------------------

const sumHalfArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    sum = sum + arr[i];
  }
  return sum;
};

//-----------------------------12---------------------------------

const countOddArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
};

//-----------------------------13---------------------------------

// const maxVar = (arr) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// this does not work with negative numbers

const maxVar = (arr) => {
  if (arr.length == 0) {
    return "empty array";
  }
  let max = arr[0]; //use the 1st element instead of 0
  for (let i = 1; i < arr.length; i++) {
    //start from 1, no point of self-check
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

//another option:
// let max = arr.shift() or let max = arr.pop()
// for (let i = 0; i < arr.length; i++)

//-----------------------------14---------------------------------

// const maxDigits = (arr) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let newArr = [];
//     newArr = arr[i].toString().split("");
//     if (newArr.length > max) {
//       max = newArr.length;
//     }
//   }
//   return max;
// };

//Itay's solution - interview question

const maxDigits = (arr) => {
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    // option 2
    let count = help(arr[i]);
    if (count > maxLength) {
      maxLength = count;
    }

    // option 1
    // let num = arr[i],
    //   count = 0;
    // while (num > 0) {  for(;num>0;) is also an option
    //   num = parseInt(num / 10);
    //   count++;
    // }
    // if (count > maxLength) {
    //   maxLength = count;
    // }
  }
  return maxLength;
};

const help = (num) => {
  if (num == 0) {
    return 1;
  }
  let count = 0;
  for (; num > 0; ) {
    num = parseInt(num / 10);
    count++;
  }
  return count;
};

//-----------------------------15---------------------------------

// const maxDigitLast = (arr) => {};

//see later

// --------------------------16 --------------------------------
const sumDigits = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = parseInt(n / 10);
  }
  return sum;
};

const maxSumDigit = (arr) => {
  let maxSum = 0,
    MAxNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    // complete from ittai
  }
};

// -------------------------- 17 --------------------------------

// -------------------------- 18 --------------------------------
// -------------------------- 19 --------------------------------

//[1,4,7,9]

const isGoUP = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

// -------------------------- 20 -----------------------------

const missingNum = (arr) => {
  for (let i = 0; i < 10; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
};
