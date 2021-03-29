import React from "react";

const TimeCalc = (props) => {
  return (
    <div className="container">
      <label>{props.name}</label>
      <input
        name={props.name}
        type="number"
        value={props.num}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default TimeCalc;
