// Libraries
import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Components
import validator from "components/validator";

// Constants
const numericKeys = ["isInteger", "isNumber"];
const ENTER_KEY_CODE = 13;

const useValidation = ({ value }) => {
  return { validationResult: true };
};

const Input = ({
  defaultValue,
  label = "",
  help = "",
  placeholder = "",
  valueChanged = (value) => {
    console.log(`valueChanged to ${value}`);
  },
  type = "text",
  valid,
  invalid,
}: {
  defaultValue: string;
  label: string;
  help: string;
  placeholder: string;
  valueChanged: (value: any) => void;
  type: string;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
}) => {
  const [value, setValue] = useState(defaultValue);
  const { validationResult } = useValidation({ value });
  const [invalidMessage, setInvalidMessage] = useState("");

  const validate = () => {
    // return validator(this);
  };

  // export = () => {
  //   const formattedValue = Object.keys(this.props).some((numericKey) =>
  //     numericKeys.includes(numericKey)
  //   )
  //     ? Number(this.state.value)
  //     : this.state.value;
  //   return { [this.props.name]: formattedValue };
  // // };
  // setValue = (e) => {
  //   this.setState(
  //     {
  //       value: e.currentTarget.value,
  //     },
  //     () => {
  //       this.props.valueChanged(this.props.name, this.state.value);
  //     }
  //   );
  // };

  const renderLabel = () => {
    if (label.length === 0) return null;
    return <label className="label">{label}</label>;
  };

  const renderError = () => {
    if (invalidMessage.length === 0) return null;
    return <p className="help is-danger">{invalidMessage}</p>;
  };

  const renderInput = () => {
    const className = classNames("input", {
      "is-success": valid,
      "is-danger": invalid,
    });

    return (
      <input
        className={className}
        type={type}
        disabled
        placeholder={placeholder}
        value={value}
        // onChange: this.setValue,
        // onKeyDown: (key) => {
        //   if (key.keyCode === ENTER_KEY_CODE) {
        //     this.props.handlePrimary();
        //   }
        // },
        // onBlur: this.validate
      />
    );
  };

  return (
    <div className="field">
      {renderLabel()}
      <div className="control">{renderInput()}</div>
      {renderError()}
    </div>
  );
};

export default Input;
