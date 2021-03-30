import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const defaultVal = "hooks";
  const [hits, setHits] = useState("");
  const [clicked, setClicked] = useState(0);
  const [inputValue, setInputValue] = useState(defaultVal);
  const [spinner, setSpinner] = useState("hidden");

  const list = [...hits];

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${inputValue}`
        );
        setHits(response.data.hits);
        setSpinner("hidden");
      } catch (e) {
        console.log(e.message);
      }
    };

    if (clicked > 0 || inputValue === defaultVal) {
      getData();
    }
  }, [clicked, inputValue]);

  const handleClick = () => {
    setClicked(clicked + 1);
    setSpinner("");
  };

  const listHits = () => {
    return list.map((hit) => (
      <li key={hit.objectID}>
        <a href={hit.url} target="_blank" rel="noreferrer">
          {hit.title}
        </a>
      </li>
    ));
  };

  return (
    <div>
      <label>Search: </label>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
      />
      <button onClick={handleClick}>Search</button>
      <div className={spinner}>Loading...</div>
      <ul>{listHits()}</ul>
    </div>
  );
};

export default Search;
