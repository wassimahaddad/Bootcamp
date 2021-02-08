function boom(n) {
  let a = 1;

  while (a < n) {
    if (a.toString().includes("7") == true) {
      console.log("BOOM-BOOM");
    } else if (a % 7 == 0) {
      console.log("BOOM");
    } else {
      console.log(a);
    }
    a = a + 1;
  }
}
