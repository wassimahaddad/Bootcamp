const express = require("express");
const chalk = require("chalk");

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
  console.log(chalk.green.inverse(`user requested movie with ID ${id}`));
});

app.post("/api/movies", (request, response) => {
  try {
    const newMovie = addMovie(request.body);
    response.status(201).send("New Movie was successfully created");
    console.log(chalk.green.inverse("user created new movie"));
  } catch (e) {
    response.status(400).send({ error: e.message });
  }
});

app.put("/api/movies/:id", (request, response) => {
  try {
    const { id } = request.params;
    const movie = request.body;
    updateMovie(id, movie);
    response.status(200).send(`Movie with ID ${id} was updated`);
    console.log(chalk.green.inverse(`user updated movie with ID ${id}`));
  } catch (e) {
    response.status(400).send({ error: e.message });
  }
});

app.delete("/api/movies/:id", (request, response) => {
  try {
    const { id } = request.params;
    removeMovie(id);
    response.status(200).send(`Movie with ID ${id} was deleted`);
    console.log(
      chalk.green.inverse(`user deleted movie with ID ${id} was deleted`)
    );
  } catch (e) {
    response.status(400).send({ error: e.message });
  }
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
