import React from "react";

const Checkbox = (props) => {
  return (
    <>
      <input onChange={props.onChange} type="checkbox" name={props.name} />
      <label className="label">{props.name}</label>
    </>
  );
};

export default Checkbox;
