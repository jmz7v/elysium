// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import Input from 'components/input'
import Button from 'components/button'

const renderPrimary = ({ text, action }) => (
  <Button
    text={text}
    onClick={action}
    kind='is-primary'
  />
)

const renderSecondary = ({ text, action }) => (
  <Button
    text={text}
    onClick={action}
    kind='is-light'
  />
)

class Form extends Component {
  constructor (props) {
    super()
    this.data = {}
    this.state = {...this.data}
  }


  render () {
    const { primary, secondary } = this.props
    return (
      <React.Fragment>
        {primary && renderPrimary(primary)}
        {secondary && renderSecondary(secondary)}
      </React.Fragment>
    )
  }
}

Form.propTypes = {
}

Form.defaultProps = {
}

export default Form
