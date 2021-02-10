let language = `English`;
let isIsland = true;
let population = 7;
let country = `Northern Ireland`;

function countryToLiveIn(a, b, c, d) {
  if (a === `English` && b === true && c < 50) {
    console.log(`You should live in ${d}`);
  } else {
    console.log(`${d} does not meet your criteria`);
  }
}

countryToLiveIn(language, isIsland, population, country);

language = `Malgasy`;
isIsland = true;
population = 25;
country = `Madagascar`;

countryToLiveIn(language, isIsland, population, country);
