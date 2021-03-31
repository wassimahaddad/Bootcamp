import React, { useState } from "react";
import Page from "./Page";

const CnJokes = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <div className="container">
      <h1>Chuck Norris Jokes</h1>
      <button className="random" onClick={() => setShowPage(!showPage)}>
        Random Joke
      </button>
      {showPage ? <Page /> : null}
    </div>
  );
};

export default CnJokes;
