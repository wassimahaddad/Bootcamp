function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

// 1. Create three instances of the Pokemon and save them in a variable.

const myPoks = {
  pok1: new Pokemon("Frosmoth", "Bug", ["Ice", "Fighting", "Fire"]),
  pok2: new Pokemon("Houndour", "Dark", ["Ice", "Fire", "Fighting"]),
  pok3: new Pokemon("Dratini", "Dragon", ["Fighting", "Fire", "Ice"]),
};

// 2. Using prototype properties, add the following methods:
//
// • A method called callPokemon that will print the following: “I choose
// you, <pokemon name>

Pokemon.prototype.callPokemon = function () {
  console.log(" I chose you,", this.name);
};

// • A method called attack that takes one parameter, an attack number,
// that will print the specific attack method from the pokemonAttackList
// array as the following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.

Pokemon.prototype.attack = function (n) {
  if (n < this.attackList.length) {
    console.log(`${this.name} used ${this.attackList[n]}`);
  } else {
    console.log(`list only containts ${this.attackList.length} methods`);
  }
};
