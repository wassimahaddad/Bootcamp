// ----------------- 1 -----------------------
// Object is fatser in adding multiple entries
const obj = {};
const maxCount = 1000000;
console.time("objTest");
for (let i = 0; i < maxCount; i++) {
  obj[i] = i;
}
console.timeEnd("objTest");
const myMap = new Map();

console.time("mapTest");
for (let i = 0; i < maxCount; i++) {
  myMap.set(i, i);
}
console.timeEnd("mapTest");

// ----------------- 2 -----------------------

// object is faster at finding
console.time("objFindTest");
const findObj = "1" in obj;
console.timeEnd("objFindTest");

console.time("mapFindTest");
const findMap = myMap.has(1);
console.timeEnd("mapFindTest");

// ----------------- 3 -----------------------

// map is faster at adding a single entry

console.time("objAddTest");
obj.newval = "val";
console.timeEnd("objAddTest");

console.time("mapAddTest");
myMap.set("newval", "val");
console.timeEnd("mapAddTest");

// ----------------- 4 -----------------------

// map is faster at deleting a single entry.
console.time("objDelTest");
delete obj.newval = "val";
console.timeEnd("objDelTest");

console.time("mapDelTest");
myMap.delete("newval";
console.timeEnd("mapDelTest");
