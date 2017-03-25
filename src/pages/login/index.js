import React, { Component, PropTypes } from 'react'

class Login extends Component {
  render () {
    return (
      <div>
        <h1>Login</h1>
      </div>
    )
  }
}

Login.propTypes = {
  children: PropTypes.node
}

export default Login
