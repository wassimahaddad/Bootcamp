let country_1 = {
  country: "Israel",
  population: 9,
  capital: "Jerusalem",
};
let country_2 = {
  country: "England",
  population: 56,
  capital: "London",
};
let country_3 = {
  country: "Jordan",
  population: 10,
  capital: "Amman",
};

function describeCountry(n) {
  let text = `${n.country} has ${n.population} million people and its capial is ${n.capital}`;
  return text;
}

const des_1 = describeCountry(country_1);
const des_2 = describeCountry(country_2);
const des_3 = describeCountry(country_3);

console.log(des_1);
console.log(des_2);
console.log(des_3);
