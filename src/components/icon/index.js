// Libraries
import React from "react";
import classNames from "classnames";

const sizes = {
  baby: "mdi-18px",
  small: "mdi-24px",
  medium: "mdi-36px",
  large: "mdi-48px"
};

// Button component
const Icon = ({ icon, spin, size }) => (
  <i
    className={classNames("icon mdi", `mdi-${icon}`, {
      "mdi-spin": spin,
      [sizes[size]]: size
    })}
  />
);

export default Icon;
