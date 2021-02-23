// Without running the code below, explain in your own words:
//1. what the result of each block of code will be and why
//2. If there are any faulty outputs, please write on how we can fix them.
//
//  Block-1
//

function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}

funcA();

// This  should return:
//undefined
// 2
//undefined - because variable a is defined after console.log(a), the value is not accessible on previous lines
//function foo is hoisted insdie the FuncA block so console.log(foo()) will return 2.
//
//----------------------------------------------------------------------------------------------
//
//  Block-2
//

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
// this should return: "Aurelio De Rosa", getFullName() is an obj.prop method, and this refers to obj.prop, so this.fullName is obj.prop.fullName
var test = obj.prop.getFullName;
console.log(test()); //this should  return "John Doe", because it's this.getFullName and test is a global variable so this refers to the global scope and so fullName in the global scope is "John Doe"

var test = obj.prop.getFullName();
console.log(test);
//----------------------------------------------------------------------------------------------
//
//  Block-3
//

function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a); //this should return undefined
console.log(typeof b); //this should return a number, because although b is not define in the function block, when assigned a value, it automatically gets defined in the the global scope.

//----------------------------------------------------------------------------------------------
//
//  Block-4
//
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC(); //this should log 2 twice (one for each funcC())as the first declaration of the function is "overritten" by the second declaration.
//----------------------------------------------------------------------------------------------
//
//  Block-5
//
function funcD1() {
  d = 1;
}
funcD1();
console.log(d); //this will return 1, as d belongs to the global scope
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e); // returns undefine, var is function-scoped and is not accesible outside the function.

//----------------------------------------------------------------------------------------------
//
//  Block-6
//
function funcE() {
  console.log("Value of f in local scope: ", f);
}

console.log("Value of f in global scope: ", f); //this will return: 'the value of f in the local scope is: 1
var f = 1;
funcE(); //this will return: 'the value of f in the global scope is: undefined
