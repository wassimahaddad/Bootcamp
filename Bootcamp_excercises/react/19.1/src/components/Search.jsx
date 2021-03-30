import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films/1/");
      setMovie(data);
    };
    fetch();
  }, []);

  return (
    <div>
      <div>Title: {movie.title}</div>
      <div>Director: {movie.director}</div>
    </div>
  );
};

export default Search;
