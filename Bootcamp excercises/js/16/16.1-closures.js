//
// -------------------------------- Block1 --------------------------------
//
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }

  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2); // the result will be 5, someFunction sets the value of 5 to be and otherFunction returns 5 to every regardless of the function parameters. so the result will retrieve the value of b.
//
// -------------------------------- Block2 --------------------------------
//

var a = 1;

function b2() {
  a = 10;
  return;
  function a() {}
}

b2();
console.log(a); //The result is 1, a both a global variable and a  local variable inside b2, when the code is parsed, the function a is top in line all it does is declare a local a. 2nd is a=10 which assigns "a" a value of 10 locally. so the console.log(a) reads the global variable.

//
// -------------------------------- Block3 --------------------------------
//
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

//the result is:
//0
//1
//2
//i is:3 i is:3 i is:3

//the for loop prints the i every iteration (0,1,2) when the loop is finished, and pushes function log in the func array. when the loop is over i=3 (because i becomes 3 and the loop stop when condition i<3 is not true)
//console.log(logs[0](), logs[1](), logs[2]()); calls the log function from the array as 3 three items, when it's called, i=3 and so we get three 'i is: 3' x3
