import React from "react";
import PropTypes from "prop-types";

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

Button.propTypes = {
  options: PropTypes.shape({
    className: PropTypes.string,
    labelClass: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
  }),
};

export default Button;
