import React from "react";

import "./Button.css";

const Button = ({ onClick, className = undefined }) => {
  const buttonClassName = className ? `button ${className}` : "button";
  return (
    <button className={buttonClassName} type="button" onClick={onClick}>
      <text>Let's go</text>
      <text className="arrow"> &#x279D;</text>
    </button>
  );
};

export default Button;
