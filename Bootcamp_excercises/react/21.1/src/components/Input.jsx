import React, { useEffect, useRef } from "react";

const InputField = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  return <input ref={inputRef} />;
};

export default InputField;
