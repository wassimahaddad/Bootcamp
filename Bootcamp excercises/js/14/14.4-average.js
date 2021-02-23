// function calcAverage(arr) {
//   var sum;
//    for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// calcAverage([85, 90, 92]);

// What is wrong with this code?
//

// 1. First find the line that contains the problem. Write it down.
//
// line 2
//
// 2. Which debug method did you use to find the bug?
//
// add debugger to line 2 and run in chrome dev tools
//
// 3. Explain the bug in your own words.
//
// the sum variable is undefined and adding a number to an underfined variable results in NaN; also, the function sums the array elements instead of calculating the average.
//
// 4. Fix the code and submit it all.

function calcAverage(arr) {
  // debugger;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
calcAverage([85, 90, 92]);
