import React, { useState } from "react";
import InputField from "./components/Input";

import "./App.css";

const App = () => {
  const [buttonName, setButtonName] = useState("Edit");
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(!showInput);
    showInput ? setButtonName("Edit") : setButtonName("Save");
  };

  return (
    <div>
      {showInput ? <InputField /> : null}
      <button onClick={handleClick}>{buttonName}</button>
    </div>
  );
};

export default App;
