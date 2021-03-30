import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [countries, setCountries] = useState("");
  const [value, SetValue] = useState("");
  const list = [...countries];

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountries(data);
    };
    fetch();
  }, [value]);

  const listCountries = () => {
    return list
      .filter((country) =>
        country.name.toLowerCase().startsWith(value.toLowerCase())
      )
      .map((country) => <div>{country.name}</div>);
  };

  return (
    <div>
      <label>Search country: </label>
      <input
        onChange={(e) => SetValue(e.target.value)}
        type="text"
        value={value}
      />
      <div>{listCountries()}</div>
    </div>
  );
};

export default Search;
