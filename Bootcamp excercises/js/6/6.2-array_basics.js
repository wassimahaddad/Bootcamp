let people = ["Greg", "Mary", "Devon", "James"];

// ------------------------------ 1 ---------------
let c = 0;
while (c < people.length) {
  console.log(people[c]);
  c = c + 1;
}

//----------------------------- 2 -------------------

people.shift();

// ----------------------- 3 -----------------------

people.pop();

// ----------------------- 4 -----------------------

people.splice(0, 0, "Matt");

// unshift adds items to begining of array

// ----------------------- 5 -----------------------

people.push("Wassim");

// ----------------------- 5 -----------------------

people.push("Wassim");

// ----------------------- 6 -----------------------
c = 0;
while (people[c] != "Mary") {
  (c = c + 1) && console.log(people[c]);
}

// ----------------------- 7 -----------------------

let group = people.slice(2);

// ----------------------- 8 -----------------------
//reset the array for mary to appear
people = ["Greg", "Mary", "Devon", "James"];

people.indexOf("Mary");
// ----------------------- 9 -----------------------

people.indexOf("Foo");

// ----------------------- 10 -----------------------

people.splice(2, 1, "Elizabeth", "Artie");

// ----------------------- 11 -----------------------

let withBob = people.concat("Bob");
