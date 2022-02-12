import React from "react";

const Button = ({ option }) => {
  return (
    <button type={option.type} className="button">
      <span className="button-label">{option.label}</span>
    </button>
  );
};

export default Button;
