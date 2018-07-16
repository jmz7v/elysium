// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Input extends React.Component {
  state = {
    value: this.props.defaultValue,
    type: this.props.type,
    label: this.props.label,
    disabled: this.props.disabled,
    valid: this.props.valid,
    invalid: this.props.invalid
  }

  setValue = e => {
    this.setState({
      value: e.currentTarget.value
    }, () => {
      this.props.valueChanged(this.state.value)
    })
  }

  renderLabel () {
    const { label } = this.state
    if (label.length === 0) return null
    return <label className='label'>{label}</label>
  }

  renderInput () {
    const { value, type, disabled, valid, invalid } = this.state
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
      </div>
    )
  }
}

Input.propTypes = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  valueChanged: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool
}

Input.defaultProps = {
  defaultValue: '',
  label: '',
  valueChanged: value => { console.log(`valueChanged to ${value}`) },
  type: 'text',
  disabled: false,
  valid: false,
  invalid: false
}

export default Input