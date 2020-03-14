import React from "react";
import './LinkButton.css'

const LinkButton = ({ text }) => {
  return (
    <a className="link" href="default.asp">
      {text}
    </a>
  );
};

export default LinkButton;
