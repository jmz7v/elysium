// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Components

// Other

class Button extends Component {
  constructor (props) {
    super()
    this.data = {
    }
    this.state = {...this.data}
  }

  onClick () {
    this.props.onClick()
  }

  render () {
    const { disabled, loading, className, kind, text } = this.props
    return (
      <button
        className={classNames('button', className, kind, {
          'is-loading': loading
        })}
        onClick={() => { this.onClick() }}
        disabled={disabled}
      >
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  kind: PropTypes.string
}

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  loading: false,
  text: 'button',
  className: '',
  kind: 'is-primary',
}

export default Button
