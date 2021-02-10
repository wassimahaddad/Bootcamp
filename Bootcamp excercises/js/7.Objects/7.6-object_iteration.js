function swapPropVal(obj) {
  let arr = Object.entries(obj);
  for (let i = 0; i < arr.length; i++) {
    let s = arr[i][0];
    arr[i][0] = arr[i][1];
    arr[i][1] = s;
  }
  return Object.fromEntries(arr);
}
