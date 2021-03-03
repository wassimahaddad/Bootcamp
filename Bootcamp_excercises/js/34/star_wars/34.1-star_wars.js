const baseEndpoint = `https://swapi.dev/api`;
const characters = [];
async function fetchTenCharacters() {
  for (let i = 1; i < 11; i++) {
    const myObj = {};
    const res = await fetch(`${baseEndpoint}/people/${i}/`);
    const data = await res.json();
    const planet = await fetch(data.homeworld);
    const planetData = await planet.json();
    myObj.name = data.name;
    myObj.height = data.height;
    myObj.hair = data.hair_color;
    myObj.planet = {
      name: planetData.name,
      population: planetData.population,
    };
    characters.push(myObj);
  }
}

fetchTenCharacters();
setTimeout(() => {
  PorcessAfterFetch();
}, 3000);

function PorcessAfterFetch() {
  console.log(characters);
  console.log(characters[0]);
  console.log(characters[1]);
  console.log(characters[2]);
  console.log(characters[3]);
  console.log(characters[4]);
  console.log(characters[5]);
  console.log(characters[6]);
  console.log(characters[7]);
  console.log(characters[8]);
  console.log(characters[9]);
}
