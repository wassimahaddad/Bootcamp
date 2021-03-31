import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
  const [random, setRandom] = useState("");
  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    const getJoke = async () => {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/random`
      );
      setRandom(response.data.value);
    };
    getJoke();
    return cancelTokenSource.cancel();
  }, []);
  return <div>{random}</div>;
};

export default Page;
