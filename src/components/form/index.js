// Libraries
import React, { Component } from "react";
import update from "immutability-helper";
import PropTypes from "prop-types";

// Components
import Input from "components/input";
import { Button } from "components/Button";
import Options from "components/options";
import Select from "components/select";

const defaultField = {
  value: "",
  label: "",
  help: "",
  type: "text",
  disabled: false,
  valid: false,
  invalid: false,
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.data = {
      fields: this.getDefaultFields(),
    };
    this.state = { ...this.data };
    this.fieldRefs = {};
    this.getFieldNames().map((field) => {
      this.fieldRefs[field] = React.createRef();
    });
  }

  getFieldNames = () => {
    return this.props.fields.map((field) => field.name);
  };

  getDefaultFields = () => {
    return this.props.fields.map((field) => ({ ...defaultField, ...field }));
  };

  handlePrimary = () => {
    this.props.handlePrimary(this.validateAndExport());
  };

  handleSecondary = () => {
    this.props.handleSecondary();
  };

  validate = () => {
    return this.getFieldNames()
      .map((field) => this.fieldRefs[field].current.validate())
      .every((field) => field);
  };

  export = () => {
    return this.getFieldNames()
      .map((field) => this.fieldRefs[field].current.export())
      .reduce((acc, i) => ({ ...acc, ...i }), {});
  };

  validateAndExport = () => {
    return this.validate() ? this.export() : null;
  };

  renderPrimary(text) {
    return (
      <div className="control">
        <Button text={text} onClick={this.handlePrimary} kind="is-primary" />
      </div>
    );
  }

  renderSecondary(text) {
    return (
      <div className="control">
        <Button text={text} onClick={this.handleSecondary} kind="is-light" />
      </div>
    );
  }

  valueChanged = (name, value) => {
    const fieldIndex = this.state.fields.findIndex(
      (field) => field.name === name
    );
    const fields = update(this.state.fields, {
      [fieldIndex]: { value: { $set: value } },
    });
    this.setState({ fields });
  };

  renderField({ name, ...props }) {
    const sharedProps = {
      key: name,
      name: name,
      valueChanged: this.valueChanged,
      ref: this.fieldRefs[name],
      handlePrimary: this.handlePrimary,
      ...props,
    };
    switch (props.type) {
      case "text":
      case "password":
        return <Input {...sharedProps} />;
      case "options":
        return <Options {...sharedProps} />;
      case "select":
        return <Select {...sharedProps} />;
      default:
        return <Options {...sharedProps} />;
    }
  }

  renderFields(fields) {
    return (
      <React.Fragment>
        {fields.map((field) => this.renderField(field))}
      </React.Fragment>
    );
  }

  render() {
    const { primary, secondary } = this.props;
    const { fields } = this.state;
    return (
      <React.Fragment>
        {fields && this.renderFields(fields)}
        <div className="field is-grouped">
          {primary && this.renderPrimary(primary)}
          {secondary && this.renderSecondary(secondary)}
        </div>
      </React.Fragment>
    );
  }
}

Form.propTypes = {
  handlePrimary: PropTypes.func.isRequired,
  handleSecondary: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

Form.defaultProps = {
  handlePrimary: (data) => {
    console.log({ data });
  },
  handleSecondary: (data) => {
    console.log({ data });
  },
  loading: false,
};

export default Form;
