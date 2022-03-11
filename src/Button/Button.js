import React from "react";

const Button = ({ options }) => {
  const { className, labelClass, type, label, onClick, isDisabled } = options;
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span className={labelClass}>{label}</span>
    </button>
  );
};

export default Button;
