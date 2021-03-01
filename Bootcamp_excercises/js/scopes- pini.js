//! In a nut shell
​
//* Global scope, function scoped, blocked scopes
//! scoping
//* lexical scoping. Which means you can look up but you cannot look down or sideways
​
//!Variables
//* global variables: they can be accessed anywhere
//* const and let variables: they are blocked scoped
//* var variables: are function scoped.
​
//!scope chain
//* inner scopes has access to its parent scopes. But outer scopes don't have access to the inner scopes
//* we cannot access sibling scopes
function scopeOne() {
  const x = "I can be accessed from inner scopes";
  console.log(globalVariable); // I can access global variables because it is the parent scope
  console.log(y); // I can't access inner scopes
​
  function scopeTwo() {
    const y = "I can only be accessed from inner scopes not outer scopes";
    console.log(x); // I can access outer scopes
    console.log(globalVariable); // i can access the global scope because I have access to my parent scope (scopeOne) which has access to the global scope. It's called scope chaining.
  }
  scopeTwo();
  function scopeThree() {
    console.log(y); // cannot access sibling scopes which is in scopeTwo function
    console.log(x); // I can access my parents scope
  }
  scopeThree();
}
const globalVariable = "I am a global variable I can be accssed anywhere";
first();
​
//!Variables
//* global variables: they can be accessed anywhere
//* const and let variables: they are blocked scoped
//* var variables: they are function scoped.
​
function first() {
  console.log(globalScope);
  var j = "i am function scoped";
​
  if (true) {
    //i'm in a block
    let x = "I am blocked scoped";
    const y = "I am blocked scoped too";
    var z = " i am only function scoped";
  }
  console.log(x); // cannot access a let variable because it is blocked scoped
  console.log(z); // I can access z because it is only function scoped.
}
first();
const globalScope = "i can be accssed";