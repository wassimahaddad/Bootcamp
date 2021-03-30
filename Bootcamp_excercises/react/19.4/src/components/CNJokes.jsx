import React, { useState, useEffect } from "react";
import axios from "axios";

const CnJokes = () => {
  const [random, setRandom] = useState("");
  const [click, setClick] = useState(false);
  const [cats, setCats] = useState([]);
  const [suffix, setSuffix] = useState("");

  useState(() => {
    const getCats = async () => {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      setCats(response.data);
      console.log(cats);
    };
    getCats();
  }, []);

  useEffect(() => {
    const getJoke = async () => {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/${suffix}`
      );
      setRandom(response.data.value);
      setClick(false);
    };
    if (click) {
      getJoke();
    }
  }, [click, suffix]);

  const handleCat = (e) => {
    setSuffix(`random?category=${e.target.name}`);
    setClick(true);
  };
  const handleRand = () => {
    setClick(true);
    setSuffix("random");
  };
  return (
    <div className="container">
      <h1>Chuck Norris Jokes</h1>
      <button className="random" onClick={handleRand}>
        Random Joke
      </button>
      {cats.map((cat) => (
        <button name={cat} onClick={handleCat} key={cat}>
          {cat}
        </button>
      ))}
      <div className="joke">{random}</div>
    </div>
  );
};

export default CnJokes;
