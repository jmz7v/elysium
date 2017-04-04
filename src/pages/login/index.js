// Libraries
import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

// Login Page
class Login extends Component {
  // Constructor
  constructor (props) {
    super(props)
    this.pageTitle = 'Iniciar Sesión'
    this.data = {
    }
    this.state = Object.assign({}, this.data)
  }
  renderLogin() {
    return (
      <div>
        <div className='field'>
          <label className='label'>Correo electrónico</label>
          <div className='control'>
            <input
              className='input is-danger'
              type='text'
              placeholder='Ingresa tu correo electrónico'
            />
          </div>
          <p className='help is-danger'>Correo electrónico inválido</p>
        </div>
        <div className='field'>
          <label className='label'>Contraseña</label>
          <div className='control'>
            <input
              className='input is-danger'
              type='text'
              placeholder='Ingresa tu Contraseña'
            />
          </div>
          <p className='help is-danger'>Contraseña inválido</p>
        </div>
        <div className='field is-grouped'>
          <p className='control'>
            <button className='button is-primary'>Ingresar</button>
          </p>
          <p className='control'>
            <button className='button is-link'>Cancelar</button>
          </p>
        </div>
      </div>
    )
  }
  // Main render
  render () {
    return (
      <DocumentTitle title={this.pageTitle + ' · ' + process.env.APP_NAME}>
        <div>
          <h1>{this.pageTitle}</h1>
          {this.renderLogin()}
        </div>
      </DocumentTitle>
    )
  }
}

Login.propTypes = {
  children: PropTypes.node
}

export default Login
