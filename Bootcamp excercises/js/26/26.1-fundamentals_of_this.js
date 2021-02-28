// Answer the following questions:
// Question 1:

// In your own words what will this point to and why?(Note this is the global scope)
console.log(this);

// Answer: "this" refers to the window oblect, an open window in a browser.

// --------------------------------------------------------------------
// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// const myObj = {
//   name: "Timmy",
//   greet: () => {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();

// Answer:
// a. it will print "Hello" because the "this" in the arrow function that has no higher function, so it will refer to the Window object in this case and not to the "myObj" object
// b. change the arrow function to a regular function:

const myObj = {
  name: "Timmy",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

// --------------------------------------------------------------------
// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};
// Answer:
// "this" is pointing to the function

// --------------------------------------------------------------------
// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

// Answer:
// since , this is an arrow function with no higher function "this" refers to the window object
// --------------------------------------------------------------------
// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// document.querySelector(".element").addEventListener(() => {
//   console.log(this);
// });

// Answer:
// a. it will point to nothing as the event listener was not passed the first argument, what to listen to.
// b. we pass the listener the first arguement, "click" for example and now when the element with class of "element" is clicked, this will refer to the window element because this is an arrow function with no higher function
document.querySelector(".element").addEventListener("click", () => {
  console.log(this);
});
