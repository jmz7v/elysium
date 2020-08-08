// Libraries
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Components
import validator from "components/validator";

// Constants
const numericKeys = ["isInteger", "isNumber"];
const ENTER_KEY_CODE = 13;



// validations to look for
const allowedValidations = {
  required: (value) => {
  },
  isEmail: (value) => {

  }
}

const useValidation = ({ name, value, validations } : {
  name: string
  value: any
  validations: any
}) => {
  const __DEBUG__ = true


  const validate = () => {
    if (__DEBUG__) {
      console.log(`Running validations, ${validations}`)
      // determine which validations from allowedValidations will be considered
      console.log({validations, allowedValidations})
      Object.entries(allowedValidations).map(([ruleName, rule]) => {
        // this validation will be run
        if (validations[ruleName]) {
          console.log(`validating for ${ruleName}`)
        }
      })
    }

  }
  return { validate };
};

const Input = ({
  name,
  defaultValue,
  label = "",
  help = "",
  placeholder = "",
  valueChanged = (name, value) => {
    console.log(`${name} to ${value}`);
  },
  type = "text",
  disabled,
  valid,
  invalid,
  // validations
  required,
  isEmail,
}: {
  name: string;
  defaultValue: string;
  label: string;
  help: string;
  placeholder: string;
  valueChanged: (name: any, value: any) => void;
  type: string;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  // validations
  required?: boolean
  isEmail?: boolean
}) => {
  const [value, setValue] = useState(defaultValue);
  const { validate } = useValidation({ name, value, validations: { required, isEmail }});
  const [invalidMessage, setInvalidMessage] = useState("");

  // export = () => {
  //   const formattedValue = Object.keys(this.props).some((numericKey) =>
  //     numericKeys.includes(numericKey)
  //   )
  //     ? Number(this.state.value)
  //     : this.state.value;
  //   return { [this.props.name]: formattedValue };
  // // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  };

  useEffect(() => {
    console.log({name, value})
    valueChanged(name, value)
  }, [value])

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
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={validate}
        // onKeyDown: (key) => {
        //   if (key.keyCode === ENTER_KEY_CODE) {
        //     this.props.handlePrimary();
        //   }
        // },
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
