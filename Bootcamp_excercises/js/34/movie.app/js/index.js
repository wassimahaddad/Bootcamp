const baseEndpoint = "http://www.omdbapi.com";
const proxy = "https://cors-anywhere.herokuapp.com/";
const API_Key = "12e9804";
const search = document.querySelector("button");
const inputField = document.querySelector("input");
const movieObj = {};

search.addEventListener("click", () => {
  movie = inputField.value;
  console.log(movie);
  getMovie(movie);
});

async function getMovie(movie) {
  const result = await fetch(`${baseEndpoint}/?apikey=${API_Key}&t=${movie}`);
  const data = await result.json();
  movieObj.Poster = data.Poster;
  movieObj.Title = data.Title;
  movieObj.Genre = data.Genre;
  movieObj.Year = data.Year;
  movieObj.Plot = data.Plot;
  movieObj.Director = data.Director;
  movieObj.Actors = data.Actors.split(",");
  movieObj.Ratings = data.Ratings;
  console.log(movieObj);

  renderResult();
}

const renderResult = () => {
  document.querySelector(".card").innerHTML = "";
  const movieArr = Object.entries(movieObj);
  const card = document.querySelector(".card");
  const poster = document.createElement("img");
  poster.src = movieObj.Poster;
  poster.className = "poster";
  card.appendChild(poster);
  for (let i = 1; i < movieArr.length - 1; i++) {
    const info = document.createElement("P");
    info.className = "movie-info";
    info.textContent = movieArr[i].toString().replace(",", ": ");
    card.appendChild(info);
  }
  const ratings = document.createElement("ul");
  ratings.textContent = "Ratings:";
  card.appendChild(ratings);
  const ratingsNum = Object.entries(movieObj.Ratings).length;
  for (let i = 0; i < ratingsNum; i++) {
    const rating = document.createElement("li");
    rating.textContent = Object.entries(movieObj.Ratings[i])
      .toString()
      .replace("Source,", "")
      .replace("Value,", "")
      .replace(",", ": ");
    ratings.appendChild(rating);
  }
};
