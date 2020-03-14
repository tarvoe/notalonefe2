import React, { useState, useCallback } from "react";
import "./TextInput.css";

const TextInput = ({ placeholder, type, onChange }) => {
  const [textValue, setTextValue] = useState("");

  const onInputChange = useCallback(
    event => {
      const { value } = event.target;
      setTextValue(value);
      return onChange(value);
    },
    [onChange]
  );

  return (
      <input
        className="input-container"
        type={type}
        name={placeholder}
        value={textValue}
        onChange={onInputChange}
      />
  );
};

export default TextInput;
