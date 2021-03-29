import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";

const numbers = ["one", "two", "three", "four", "five"];
const List = () => {
  const [serial, setSerial] = useState(numbers);
  const checked = [...serial];

  const handleClick = (e) => {
    if (e.target.name === "Reset") {
      setSerial(numbers);
    } else {
      setSerial(checked);
    }
  };

  const handleChecked = (e) => {
    if (e.target.checked === true) {
      checked.splice(checked.indexOf(e.target.name), 1);
    }
  };

  return (
    <div>
      <Button name="Delete" onClick={handleClick} />
      <Button name="Reset" onClick={handleClick} />
      <div className="list">
        {serial.map((num) => {
          return (
            <li key={num}>
              <Checkbox name={num} onChange={handleChecked} />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default List;
