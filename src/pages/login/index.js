// Libraries
import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

// Login Page
class Login extends Component {
  // Constructor
  constructor(props) {
    super(props)
    this.pageTitle = 'Iniciar Sesión'
    this.data = {
    }
    this.state = Object.assign({}, this.data)
  }
  // Main render
  render () {
    return (
      <DocumentTitle title={this.pageTitle + ' · ' + process.env.APP_NAME}>
        <h1>{this.pageTitle}</h1>
      </DocumentTitle>
    )
  }
}

Login.propTypes = {
  children: PropTypes.node
}

export default Login
