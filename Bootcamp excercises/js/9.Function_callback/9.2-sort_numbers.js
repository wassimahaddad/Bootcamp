const numbers = [1, -5, 666, 2, 400, 11];

// ----------- 1 -------------

//option 1
const sortingFunctionAscending = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};

numbers.sort(sortingFunctionAscending);

// option 2

// sort function receives negative/positive/zero

const sortingFunctionAscending = (a, b) => a - b;

// ----------- 2 -------------

numbers.sort(sortingFunction).reverse();

// or

const sortingFunctionDescending = (a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
};
