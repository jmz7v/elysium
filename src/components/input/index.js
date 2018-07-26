// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import validator from 'components/validator'

class Input extends React.Component {
  state = {
    value: this.props.defaultValue,
    type: this.props.type,
    help: this.props.help,
    disabled: this.props.disabled,
    valid: this.props.valid,
    invalid: this.props.invalid,
    invalidMessage: ''
  }

  validate = () => {
    return validator(this)
  }

  validateAndExport = () => {
    return this.validate() ? this.export() : null
  }

  export = () => {
    return ({[this.props.name]: this.state.value})
  }

  setValue = e => {
    this.setState({
      value: e.currentTarget.value
    }, () => {
      this.props.valueChanged(this.props.name, this.state.value)
    })
  }

  renderLabel () {
    const { label } = this.props
    if (label.length === 0) return null
    return <label className='label'>{label}</label>
  }

  renderError () {
    const { invalidMessage } = this.state
    if (invalidMessage.length === 0) return null
    return <p className='help is-danger'>{invalidMessage}</p>
  }

  renderInput () {
    const { valid, invalid, value, type, disabled } = this.state
    const className = classNames('input', {
      'is-success': valid,
      'is-danger': invalid
    })

    return (
      <input
        className={className}
        type={type}
        disabled={disabled}
        placeholder='Text input'
        value={value}
        onChange={this.setValue}
      />
    )
  }

  render () {
    return (
      <div className='field'>
        {this.renderLabel()}
        <div className='control'>{this.renderInput()}</div>
        {this.renderError()}
      </div>
    )
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
  invalid: PropTypes.bool
}

Input.defaultProps = {
  defaultValue: '',
  label: '',
  help: '',
  valueChanged: value => { console.log(`valueChanged to ${value}`) },
  type: 'text',
  disabled: false,
  valid: false,
  invalid: false
}

export default Input
