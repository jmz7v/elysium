// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'

class Tabs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: this.props.active,
      value: this.props.defaultValue,
      invalidMessage: '',
    }
  }

  renderLabel () {
    const { label } = this.props
    if (label.length === 0) return null
    return <label className='label'>{label}</label>
  }

  renderOption ({value, label}) {
    return (
      <div className='option' key={value} onClick={() => { this.setState({value}) }}>

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

Tabs.propTypes = {}

Tabs.defaultProps = {
  active: 0
}

export default Tabs
