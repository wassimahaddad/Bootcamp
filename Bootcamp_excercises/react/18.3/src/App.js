import React, { useState } from "react";
import TimeCalc from "./components/TimeCalc";

import "./App.css";

const App = () => {
  const [num, setNum] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "Seconds":
        setNum(e.target.value);
        break;
      case "Minutes":
        setNum(e.target.value * 60);
        break;
      case "Hours":
        setNum(e.target.value * 3600);
        break;
      default:
        setNum(e.target.value);
    }
  };

  return (
    <div>
      <TimeCalc onChange={handleChange} name="Seconds" num={num} />
      <TimeCalc onChange={handleChange} name="Minutes" num={num / 60} />
      <TimeCalc onChange={handleChange} name="Hours" num={num / 3600} />
    </div>
  );
};

export default App;
