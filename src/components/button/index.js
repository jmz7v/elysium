// Libraries
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Other
export const config = {
  main: "button",
  loading: "is-loading",
  disabled: "is-disabled",
};

// Button component
const Button = ({ onClick, disabled, loading, className, kind, text }) => (
  <button
    className={classNames(config.main, className, kind, {
      [config.loading]: loading,
      [config.disabled]: disabled,
    })}
    onClick={() => {
      onClick();
    }}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  kind: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  text: "button",
  className: "",
  kind: "is-primary",
};

export default Button;
