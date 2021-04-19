const fs = require("fs");

const getMovies = () => {
  return fs.readFileSync("./Database/movies.json");
};
const getMovie = (id) => {
  const arr = JSON.parse(getMovies().toString());
  const movie = arr.filter((obj) => obj.id == id);
  return movie[0];
};

const addMovie = (movie) => {
  let arr = JSON.parse(getMovies().toString());
  arr.push(movie);
  fs.writeFileSync("./Database/movies.json", JSON.stringify(arr));
};

const removeMovie = (id) => {
  // console.log(id);
  const arr = JSON.parse(getMovies().toString());
  let newArr = arr.filter((obj) => obj.id != id);
  fs.writeFileSync("./Database/movies.json", JSON.stringify(newArr));
};

const updateMovie = (id, data) => {
  const movie = getMovie(id);
  let updated = { ...movie, ...data };
  removeMovie(id);
  addMovie(updated);
};
module.exports = { getMovies, getMovie, addMovie, removeMovie, updateMovie };
