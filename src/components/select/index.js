// Libraries
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Components
import validator from "components/validator";

// Constants
const numericKeys = ["isInteger", "isNumber"];
const ENTER_KEY_CODE = 13;

class Select extends React.Component {
  state = {
    value: this.props.defaultValue,
    type: this.props.type,
    help: this.props.help,
    disabled: this.props.disabled,
    valid: this.props.valid,
    invalid: this.props.invalid,
    invalidMessage: "",
  };

  validate = () => {
    return validator(this);
  };

  validateAndExport = () => {
    return this.validate() ? this.export() : null;
  };

  export = () => {
    const formattedValue = Object.keys(this.props).some((numericKey) =>
      numericKeys.includes(numericKey)
    )
      ? Number(this.state.value)
      : this.state.value;
    return { [this.props.name]: formattedValue };
  };

  setValue = (e) => {
    this.setState(
      {
        value: e.currentTarget.value,
      },
      () => {
        this.props.valueChanged(this.props.name, this.state.value);
      }
    );
  };

  renderLabel() {
    const { label } = this.props;
    if (label.length === 0) return null;
    return <label className="label">{label}</label>;
  }

  renderError() {
    const { invalidMessage } = this.state;
    if (invalidMessage.length === 0) return null;
    return <p className="help is-danger">{invalidMessage}</p>;
  }

  renderSelect() {
    const { valid, invalid, value, type, disabled } = this.state;
    const { placeholder, options } = this.props;
    const className = classNames({
      "is-success": valid,
      "is-danger": invalid,
    });

    const props = {
      className,
      type,
      disabled,
      placeholder,
      value,
      onChange: this.setValue,
      onKeyDown: (key) => {
        if (key.keyCode === ENTER_KEY_CODE) {
          this.props.handlePrimary();
        }
      },
    };

    const renderOptions = options.map((option) => (
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
    ));

    return <select {...props}>{renderOptions}</select>;
  }

  render() {
    return (
      <div className="field">
        {this.renderLabel()}
        <div className="select">{this.renderSelect()}</div>
        {this.renderError()}
      </div>
    );
  }
}

Select.propTypes = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  valueChanged: PropTypes.func,
  type: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
};

Select.defaultProps = {
  defaultValue: "",
  label: "",
  help: "",
  valueChanged: (value) => {
    console.log(`valueChanged to ${value}`);
  },
  type: "text",
  options: [],
  disabled: false,
  valid: false,
  invalid: false,
};

export default Select;
