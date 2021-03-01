const people = [
  { id: "1", name: "Leigh", age: 35 },
  { id: "2", name: "Jenny", age: 30 },
  { id: "3", name: "Heather", age: 28 },
];
let result;
// sum of ages
result = people.reduce((acc, person) => acc + person.age, 0);
// console.log(result);
// count
result = people.reduce((acc, person) => acc + 1, 0);
// console.log(result);
// array of names (map)
result = people.reduce((acc, person) => [...acc, person.name], []);
// console.log(result);
// get max age
result = people.reduce((acc, person) => {
  if (person.age < acc) {
    return person.age;
  } else return acc;
}, people[0].age);
// console.log(result);
// find
result = people.reduce((acc, person) => {
  if (person.name === "Jen") {
    return person;
  } else return acc;
}, "not found");
// console.log(result);
// check if older than 21
result = people.reduce((acc, person) => {
  if (person.age < 29) {
    return false;
  } else return acc;
}, true);
// console.log(result);
const orders = [
  { id: "1", status: "pending" },
  { id: "2", status: "pending" },
  { id: "3", status: "cancelled" },
  { id: "4", status: "shipped" },
];
result = orders.reduce((acc, order) => {
  return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
}, {});
console.log(result);
const folders = [
  "index.js",
  ["flatten.js", "map.js"],
  ["any.js", ["all.js", "count.js"]],
];
function flatten(acc, item) {
  if (Array.isArray(item)) {
    return item.reduce(flatten, acc);
  }
  return [...acc, item];
}
result = folders.reduce(flatten, []);
console.log(result);
