// function getSum(arr1, arr2) {
//   const sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     sum += arr2[i];
//   }
// }
// getSum([1, 2, 3][(5, 66, 23)]);

// -----------------------------------------------------------

//lines: 11, 5

//2. I use the debugger command.

//3.
// 3.1 line 11:
// a) the second element is not a properly defined array, there are extra brackets inside the square brackets
// b) there is no comma between the arrays.
//3.2 line 5 tries to change a constant variable.
//3.3 this function does not return anything.

function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
getSum([1, 2, 3][(5, 66, 23)]);
