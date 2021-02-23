function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmalest(52, 66, 2);

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
//lines 11 and lines 6 & 8

//------------------------------------------------------------
// 2. Which debug method did you use to find the bug?
//with debuger for a) and b) by eye

//------------------------------------------------------------
// 3. Explain the bug in your own words.
//a) typo in line 11, a missing 'l' in findSmallest
//b) line 6 and 8 are swapped.
//------------------------------------------------------------
// 4. Fix the code and submit it all.

function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return b;
  } else {
    return a;
  }
}
findSmallest(52, 66, 2);
