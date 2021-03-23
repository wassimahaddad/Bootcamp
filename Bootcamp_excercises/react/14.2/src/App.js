import React from "react";
import "./App.css";
import Box from "./components/Box";

const App = () => {
  return (
    <div>
      <div className="container">
        <h1>What is the meaning of life?</h1>
        <div>
          <Box />
        </div>
      </div>
    </div>
  );
};

export default App;
