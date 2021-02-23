const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// ---------------------- a1 --------------------------
foods.sort();
// ---------------------- a2 --------------------------
foods.sort().reverse();

//with callback

food.sort((a, b) => b - a);
// ---------------------- b1 --------------------------
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

// Mine
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  return arr.sort();
}

//Natalie's
console.log(
  foodsWithUpperCase.sort((a, b) => {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();
    if (aLower > bLower) {
      return -1;
    } else if (aLower < bLower) {
      return 1;
    } else {
      return 0;
    }
  })
);

// ---------------------- b2 --------------------------

//mine
sortArray(foodsWithUpperCase).reverse();

//natalie's recverse operators in b1
// ---------------------- c1 --------------------------

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

//mine
words.sort(function (a, b) {
  return b.length - a.length || a.localeCompare(b);
});

//natalie's

words.sort((a, b) => a.length - b.length);
