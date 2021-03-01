function steps(n) {
  let a = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        a += "#";
      } else {
        a += " ";
      }
    }
    console.log(`'${a}'`);
    a = "";
  }
}
