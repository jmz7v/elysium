// Libraries
import React from "react";
import classNames from "classnames";

// Other
export const config = {
  main: "button",
  loading: "is-loading",
  disabled: "is-disabled",
};

// Button component
export const Button = ({
  onClick,
  disabled,
  loading,
  className,
  kind = "is-primary",
  text = "Button",
}: {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  kind?: string;
  text: string;
}) => (
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
