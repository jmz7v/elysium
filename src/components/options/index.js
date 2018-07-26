// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

class Tabs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.defaultValue,
      invalidMessage: '',
    }
  }

  validate () {
    if (this.props.required) {
      const isValid = !!this.state.value
      this.setState({
        invalidMessage: isValid ? '' : 'Campo requerido'
      })
      return isValid
    }
    return true
  }

  export () {
    return {[this.props.name]: this.state.value}
  }

  validateAndExport () {
    return this.validate()
      ? this.export()
      : null
  }

  setValue = value => {
    this.setState({
      value: this.state.value === value ? this.props.defaultValue : value
    })
  }

  renderLabel () {
    const { label } = this.props
    if (label.length === 0) return null
    return <label className='label'>{label}</label>
  }

  renderOption ({value, label}) {
    return (
      <div className='option' key={value} onClick={() => { this.setValue(value) }}>

        {label}
        {this.state.value === value ? 'active' : null}
      </div>
    )
  }

  renderOptions () {
    return this.props.options.map(option => this.renderOption(option))
  }

  renderError () {
    const { invalidMessage } = this.state
    if (invalidMessage.length === 0) return null
    return <p className='help is-danger'>{invalidMessage}</p>
  }

  render () {
    return (
      <div className='field'>
        {this.renderLabel()}
        <div className='control'>{this.renderOptions()}</div>
        {this.renderError()}
      </div>
    )
  }
}

Tabs.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    null
  ]),
  label: PropTypes.string
}

Tabs.defaultProps = {
  defaultValue: null,
  label: ''
}

export default Tabs
