function myFunc() {
  let i;
  const funcs = [];

  for (i = 0; i < 3; i++) {
    console.log(i);
    const log = () => {
      return `i is: ${i}`;
    };

    funcs.push(log);
    //setTimeout(log, 100);
  }
  return funcs;
}

const logs = myFunc();
console.log(logs[0](), logs[1](), logs[2]());
