import React, { useState } from "react";
// import { Link } from "react-router-dom";
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsa maiores in sapiente minima necessitatibus, eligendi recusandae tempora? Ratione delectus sapiente blanditiis quibusdam rerum possimus labore molestias quisquam eveniet nulla architecto animi, esse autem, ad praesentium! Voluptatum, tempore illo! Quasi doloremque fuga minima, officia provident repellat atque tempora molestias voluptates";
const maxlen = 20;
const Read = () => {
  const [string, setString] = useState(text.substring(0, maxlen - 1));
  const [buttonName, setButtonName] = useState("Read More");

  const showText = () => {
    if (string.length <= maxlen) {
      setString(text);
      setButtonName("Read Less");
    } else {
      setString(text.substring(0, maxlen - 1));
      setButtonName("Read More");
    }
  };

  return (
    <div>
      <div className="text">{string}...</div>
      <div className="read-more-less" onClick={showText}>
        {buttonName}
      </div>
    </div>
  );
};

export default Read;
