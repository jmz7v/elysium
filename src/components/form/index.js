// Libraries
import React, { Component } from 'react'
import update from 'immutability-helper';
import PropTypes from 'prop-types'

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

  export = () => {
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
    const { fields, primary, secondary } = this.props
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
