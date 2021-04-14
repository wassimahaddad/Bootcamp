const fs = require("fs");

const getMovies = () => {
  return fs.readFileSync("./Database/movies.json");
};
const getMovie = (id) => {
  const arr = JSON.parse(getMovies().toString());
  const movie = arr.filter((obj) => obj.id === parseInt(id));
  return movie;
};

const addMovie = (movie) => {
  let arr = JSON.parse(getMovies().toString());
  arr.push(movie);
  console.log(arr);
  fs.writeFileSync("./Database/movies.json", JSON.stringify(arr));
};

const removeMovie = (id) => {
  // console.log(id);
  const arr = JSON.parse(getMovies().toString());
  let newArr = arr.filter((obj) => obj.id !== parseInt(id));
  fs.writeFileSync("./Database/movies.json", JSON.stringify(newArr));
};

const updateMovie = (id, data) => {
  const arr = JSON.parse(getMovies().toString());
  const movie = arr.filter((obj) => obj.id === parseInt(id));
  let updated = { ...movie[0], ...data };
  const newArr = JSON.parse(getMovies().toString()).filter(
    (obj) => obj.id !== parseInt(id)
  );
  newArr.push(updated);
  fs.writeFileSync("./Database/movies.json", JSON.stringify(newArr));
};
module.exports = { getMovies, getMovie, addMovie, removeMovie, updateMovie };
