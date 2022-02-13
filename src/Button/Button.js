import React from "react";

const Button = ({ options }) => {
  const { type, label, onClick } = options;
  return (
    <button type={type} className="button" onClick={onClick}>
      <span className="button-label">{label}</span>
    </button>
  );
};

export default Button;
