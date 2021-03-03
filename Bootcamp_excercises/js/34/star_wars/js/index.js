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

  makeTable();
}

function makeTable() {
  const container = document.querySelector(".container");
  const tableName = document.createElement("div");
  tableName.className = "table-name";
  tableName.textContent = "Star Wars";
  // const tableTitles = document.createElement("div");
  // tableTitles.className = "table-titles";
  const table = document.createElement("div");
  table.className = "table-grid";
  container.appendChild(tableName);
  // container.appendChild(tableTitles);
  container.appendChild(table);

  const titles = Object.keys(characters[0]).concat(
    Object.keys(characters[0].planet)[1]
  );

  const gridArr = [];

  for (let i = 0; i < titles.length; i++) {
    let row = [];
    gridArr.push(row);
    let cell = document.createElement("div");
    cell.className = "titles cell";
    cell.textContent = titles[i];
    table.appendChild(cell);
    row.push(cell);
  }

  for (let i = 0; i < 11; i++) {
    let row = [];
    gridArr.push(row);
    let cell1 = document.createElement("div");
    cell1.className = "cell";
    cell1.textContent = characters[i].name;
    let cell2 = document.createElement("div");
    cell2.className = "cell";
    cell2.textContent = characters[i].height;
    let cell3 = document.createElement("div");
    cell3.className = "cell";
    cell3.textContent = characters[i].hair;
    let cell4 = document.createElement("div");
    cell4.className = "cell";
    cell4.textContent = characters[i].planet.name;
    let cell5 = document.createElement("div");
    cell5.className = "cell";
    cell5.textContent = characters[i].planet.population;
    table.appendChild(cell1);
    row.push(cell1);
    table.appendChild(cell2);
    row.push(cell2);
    table.appendChild(cell3);
    row.push(cell3);
    table.appendChild(cell4);
    row.push(cell4);
    table.appendChild(cell5);
    row.push(cell5);
  }
}
fetchTenCharacters();
