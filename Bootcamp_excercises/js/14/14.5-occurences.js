// function countOccurrences(str, char) {
//    let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === char) {
//       counter + 1;
//     }
//   }
//   return counter;
// }
// countOccurrences("ini mini miny moe", "n");

// What is wrong with this code?
//

// 1. First find the line that contains the problem. Write it down.
//
// line
//
// 2. Which debug method did you use to find the bug?
//
// add debugger to line 2 and run in chrome dev tools
//
// 3. Explain the bug in your own words.
//
// the counter variable is a block level variable defined outside the block of the for loop
//
// 4. Fix the code and submit it all.

function countOccurrences(str, char) {
  debugger;

  for (let i = 0; i < str.length; i++) {
    let counter = 0;
    if (str.charAt(i) === char) {
      counter + 1;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");
