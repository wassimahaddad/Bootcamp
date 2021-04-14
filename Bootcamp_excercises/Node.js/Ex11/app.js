const express = require("express");

const app = express();
const {
  getMovies,
  getMovie,
  addMovie,
  removeMovie,
  updateMovie,
} = require("./Utils/Utils");

app.use(express.json());

app.get("/api/movies", (request, response) => {
  const movies = getMovies().toString();
  response.send(movies);
  console.log("user requested movie list");
});
app.get("/api/movies/:id", (request, response) => {
  const { id } = request.params;
  const movie = getMovie(id);
  response.send(movie);
  console.log("user requested movie by id");
});

app.post("/api/movies", (request, response) => {
  try {
    const newMovie = addMovie(request.body);
    response.status(201).send(newMovie);
  } catch (e) {
    response.status(400).send({ error: e.message });
  }
});

app.put("/api/movies/:id", (request, response) => {
  const { id } = request.params;
  const movie = request.body;
  // console.log(movie);
  updateMovie(id, movie);
  response.send(`Movie data was updated`);
});

app.delete("/api/movies/:id", (request, response) => {
  const { id } = request.params;
  removeMovie(id);
  response.send(`Movie with ID ${id} was deleted`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
