// Libraries
import React, { Component } from 'react'
import update from 'immutability-helper';
import PropTypes from 'prop-types'
import validator from 'validator'

// Components
import Input from 'components/input'
import Button from 'components/button'

const defaultField = {
  value: '',
  label: '',
  help: '',
  type: 'text',
  disabled: false,
  valid: false,
  invalid: false
}

class Form extends Component {
  constructor (props) {
    super(props)
    this.data = {
      fields: this.getDefaultFields()
    }
    this.state = {...this.data}
  }

  getDefaultFields = () => {
    return this.props.fields.map(field => ({...defaultField, ...field}))
  }

  handlePrimary = () => {
    const { handlePrimary } = this.props
    handlePrimary(this.export())
  }

  handleSecondary = () => {
    const { handleSecondary } = this.props
    handleSecondary()
  }

  validate = () => {
    return this.state.fields.map(field => {
      if (typeof field.validate === 'undefined') return true

      const fieldIsValid = field.validate.map(validation => {
        // console.log(validation, !validator.isEmpty(validation))
        switch (validation) {
          case 'required':
            return !validator.isEmpty(field.value)
          default:
            return true
        }
      }).every(t => t)

      const fieldIndex = this.state.fields.findIndex(f => f.name === field.name)
      const fields = update(this.state.fields, {[fieldIndex]: {invalid: {$set: fieldIsValid}}})
      console.log({fields})
      this.setState({fields})

      return fieldIsValid
    }).every(t => t)
  }

  export = () => {
    this.validate()
    console.log(this.validate())
    return this.state.fields.map(({name, value}) => ({[name]: value}))
  }

  renderPrimary (text) {
    return (
      <Button
        text={text}
        onClick={this.handlePrimary}
        kind='is-primary'
      />
    )
  }

  renderSecondary (text) {
    return (
      <Button
        text={text}
        onClick={this.handleSecondary}
        kind='is-light'
      />
    )
  }

  renderField ({ name, label, kind }) {
    return (
      <Input
        key={name}
        name={name}
        label={label}
        kind={kind}
        valueChanged={this.valueChanged}
      />
    )
  }

  valueChanged = (name, value) => {
    const fieldIndex = this.state.fields.findIndex(field => field.name === name)
    const fields = update(this.state.fields, {[fieldIndex]: {value: {$set: value}}})
    this.setState({fields})
  }

  renderFields (fields) {
    return (
      <React.Fragment>
        {fields.map(field => this.renderField(field))}
      </React.Fragment>
    )
  }

  render () {
    const { primary, secondary } = this.props
    const { fields } = this.state
    return (
      <React.Fragment>
        {fields && this.renderFields(fields)}
        {primary && this.renderPrimary(primary)}
        {secondary && this.renderSecondary(secondary)}
      </React.Fragment>
    )
  }
}

Form.propTypes = {
  handlePrimary: PropTypes.func.isRequired,
  handleSecondary: PropTypes.func.isRequired,
}

Form.defaultProps = {
  handlePrimary: data => { console.log({data}) },
  handleSecondary: data => { console.log({data}) },
}

export default Form
