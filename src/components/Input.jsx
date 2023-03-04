import React from "react";
import PropTypes from "prop-types";

export const Input = ({ id, className, label, ...attrs }) => {
  return (
    <div className="input__wrapper">
      {label && (
        <div className="labels__wrapper">
          <label className="input__label" htmlFor={id}>
            {label}
          </label>
          {attrs.required && <span className="input-required">Required</span>}
        </div>
      )}
      <input
        name={id}
        id={id}
        className={`input-reset ${className}`}
        {...attrs}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  className: "",
  label: "",
};
