const arr = ["boo", "doooo", "hoo", "ro"];

function length(a) {
  let c = 0;
  let newArr = [];
  while (c < a.length) {
    newArr.push(arr[c].length);
    c = c + 1;
  }
  return newArr;
}
