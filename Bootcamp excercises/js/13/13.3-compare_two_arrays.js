const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Pizza", "Ice-cream", "Olives", "Hamburgers"];

const compareArrayContent = (arr1, arr2) => {
  let identical = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        identical.push(arr1[i]);
      }
    }
  }
  if (identical.length == 0) {
    return "false";
  } else {
    return identical;
  }
};

compareArrayContent(food, food1);
