// -------------- 1 -----------------------
const obj1 = {
  name: "name1",
};
const obj2 = {
  name: "name2",
};
const obj3 = {
  name: "name3",
};

// -------------- 2 -----------------------

const objMap = new Map();

objMap.set(obj1, 001);
objMap.set(obj2, 002);
objMap.set(obj3, 003);

// -------------- 3 -----------------------

for (const [name, id] of objMap) {
  console.log(name.name, id);
}
