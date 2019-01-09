// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Components
import validator from 'components/validator';

// Constants
const numericKeys = ['isInteger', 'isNumber'];
const ENTER_KEY_CODE = 13;

class Input extends React.Component {
  state = {
    value: this.props.defaultValue,
    type: this.props.type,
    help: this.props.help,
    disabled: this.props.disabled,
    valid: this.props.valid,
    invalid: this.props.invalid,
    invalidMessage: '',
  };

  validate = () => {
    return validator(this);
  };

  validateAndExport = () => {
    return this.validate() ? this.export() : null;
  };

  export = () => {
    const formattedValue = Object.keys(this.props).some(numericKey =>
      numericKeys.includes(numericKey)
    )
      ? Number(this.state.value)
      : this.state.value;
    return { [this.props.name]: formattedValue };
  };

  setValue = e => {
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

  renderInput() {
    const { valid, invalid, value, type, disabled } = this.state;
    const { placeholder } = this.props;
    const className = classNames('input', {
      'is-success': valid,
      'is-danger': invalid,
    });

    const props = {
      className,
      type,
      disabled,
      placeholder,
      value,
      onChange: this.setValue,
      onKeyDown: key => {
        if (key.keyCode === ENTER_KEY_CODE) {
          this.props.handlePrimary();
        }
      },
      onBlur: this.validate,
    };

    return <input {...props} />;
  }

  render() {
    return (
      <div className="field">
        {this.renderLabel()}
        <div className="control">{this.renderInput()}</div>
        {this.renderError()}
      </div>
    );
  }
}

Input.propTypes = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  valueChanged: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
};

Input.defaultProps = {
  defaultValue: '',
  label: '',
  help: '',
  valueChanged: value => {
    console.log(`valueChanged to ${value}`);
  },
  type: 'text',
  disabled: false,
  valid: false,
  invalid: false,
};

export default Input;
