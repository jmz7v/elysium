// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Input extends React.Component {
  state = {
    value: this.props.defaultValue,
    type: this.props.type,
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

  render () {
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
}

Input.propTypes = {
  defaultValue: PropTypes.string,
  valueChanged: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool
}

Input.defaultProps = {
  defaultValue: '',
  valueChanged: value => { console.log(`valueChanged to ${value}`) },
  type: 'text',
  disabled: false,
  valid: false,
  invalid: false
}

export default Input