// ---------------- 1 --------------------------

let strArr = new Array(100).fill("something");

// ---------------- 2 --------------------------

let numArr = Array.from({ length: 100 }, (x, i) => i + 1);
// ---------------- 3 --------------------------
// ---------------- 4 --------------------------

// ---------------- 5 --------------------------

Array.isArray(numArr);

// ---------------- 6 --------------------------

randomArr = [1, 2, 3, 4, 5, 6, 7, 8];

//immutable
newArray = [...randomArr];

//mutable
reverse = randomArr.reverse();
