// Libraries
import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import update from 'immutability-helper'
import classNames from 'classnames'
import validator from 'validator'

// Login Page
class Login extends Component {
  // Constructor
  constructor (props) {
    super(props)
    this.pageTitle = 'Iniciar Sesión'
    this.data = {
      form: {
        email: '',
        password: ''
      },
      isValid: {
        email: true,
        password: true
      }
    }
    this.state = Object.assign({}, this.data)
  }

  _onChangeEmail (e) {
    this.setState({
      form: update(this.state.form, {email: {$set: e.target.value}})
    })
  }

  _onChangePassword (e) {
    this.setState({
      form: update(this.state.form, {password: {$set: e.target.value}})
    })
  }

  _isValidEmail () {
    let isValid = validator.isEmail(this.state.form.email)
    this.setState({
      isValid: update(this.state.isValid, {email: {$set: isValid}})
    })
    return isValid
  }

  _isValidPassword () {
    let isValid = validator.isLength(this.state.form.password, {min: 8})
    this.setState({
      isValid: update(this.state.isValid, {password: {$set: isValid}})
    })
    return isValid
  }

  handleSubmit (e) {
    e.preventDefault()
    if (this._isValidEmail() && this._isValidPassword()) {
      console.log('hi')
    }
  }

  renderLogin () {
    return (
      <div>
        <div className='field'>
          <label className='label'>Correo electrónico</label>
          <div className='control'>
            <input
              className={classNames('input', {'is-danger': !this.state.isValid.email})}
              type='text'
              placeholder='Ingresa tu correo electrónico'
              onChange={this._onChangeEmail.bind(this)}
              value={this.state.form.email}
            />
          </div>
          <p className={classNames('help', 'is-danger', {'is-hidden': this.state.isValid.email})}>Correo electrónico inválido</p>
        </div>
        <div className='field'>
          <label className='label'>Contraseña</label>
          <div className='control'>
            <input
              className={classNames('input', {'is-danger': !this.state.isValid.password})}
              type='password'
              placeholder='Ingresa tu Contraseña'
              onChange={this._onChangePassword.bind(this)}
              value={this.state.form.password}
            />
          </div>
          <p className={classNames('help', 'is-danger', {'is-hidden': this.state.isValid.password})}>Contraseña inválido</p>
        </div>
        <div className='field is-grouped'>
          <p className='control'>
            <button
              className='button is-primary'
              type='button'
              onClick={this.handleSubmit.bind(this)}
            >Ingresar</button>
          </p>
          <p className='control'>
            <button
              className='button is-link'
            >Cancelar</button>
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
