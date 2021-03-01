// ---------------- 1,2,4 ---------------------------------------

const myCountry = {
  country: "Jordan",
  capital: "Amman",
  language: "Arabic",
  population: 10658123,
  neighbors: ["Israel", "Syria", "Saudi Arabia", "Iraq"],
  describe: function () {
    return `${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbors.length} neighbouring countries and a capital called ${this.capial}.`;
  },
  checkIsland: function () {
    return this.neighbors.length == 0 ? true : false;
  },
};

// ---------------- 3 ---------------------------------------

console.log(myCountry.describe());
