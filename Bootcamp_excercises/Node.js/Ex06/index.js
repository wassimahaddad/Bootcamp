const data = [
  //explanation is below the code
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: [
      {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    ],
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: [
      {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    ],
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: [
      {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    ],
  },
];

debugger;
const names = (arr) => {
  return arr.map((el) => {
    return el.name;
  });
};
const born = (arr) => {
  return arr.filter((item) => {
    const birthday = new Date(item.birthday).getFullYear();
    if (birthday < 1990) {
      return item;
    }
  });
};
const food = (arr) => {
  const obj = {};
  arr.forEach((el) => {
    el.favoriteFoods.forEach((foodObj) => {
      console.log(foodObj);
      foodObj.forEach((meatItem) => {
        console.log();
        // obj[meatItem] = obj[meatItem] + 1 || 1;
      });
      foodObj.fish.forEach((fishItem) => {
        obj[fishItem] = obj[fishItem] + 1 || 1;
      });
    });
  });
  return obj;
};
console.log(food(data));

// food function in line 68 is trying to perform a nested forEach. it takes and array and iterates the elements then tries to iterare each element as if they were arrays themselves, but they are objects and not arrays. forEach is an array method and not an object method, so when run on objects its not recognized as a method casuing the "forEach is not a function" error
