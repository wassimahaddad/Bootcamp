const candyStore = {
  candies: [
    { name: "mint gum", id: "as12f", price: 2, amount: 2 },
    { name: "twix", id: "5hd7y", price: 5, amount: 4 },
  ],
  cashRegister: 200,
};

// ----------------------- 1 --------------------------

function getCandy(candyStore, id) {
  let n = 0;
  while (candyStore.candies[n].id != id) {
    n = n + 1;
  }
  return candyStore.candies[n];
}

// ----------------------- 2 --------------------------

function getPrice(candyStore, id) {
  let n = 0;
  while (candyStore.candies[n].id != id) {
    n = n + 1;
  }
  return candyStore.candies[n].price;
}

// ----------------------- 3 --------------------------

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name, id, price, amount: 1 });
}

// ----------------------- 4 --------------------------

function buy(candyStore, id) {
  return candyStore.cashRegister - getPrice(candyStore, id);
}
