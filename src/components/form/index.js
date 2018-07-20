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
    const { action } = this.props.primary
    action(this.export())
  }

  handleSecondary = () => {
    const { action } = this.props.secondary
    action()
  }

  export = () => {
    return this.state.fields.map(({name, value}) => ({[name]: value}))
  }

  renderPrimary ({ text, action }) {
    return (
      <Button
        text={text}
        onClick={this.handlePrimary}
        kind='is-primary'
      />
    )
  }

  renderSecondary ({ text, action }) {
    return (
      <Button
        text={text}
        onClick={action}
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
}

Form.defaultProps = {
}

export default Form
