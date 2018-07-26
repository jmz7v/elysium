// Libraries
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

// Components
import Title from 'components/title'
import Form from 'components/form'

const form = {
  title: 'Ingresa',
  fields: [
    {
      name: 'email',
      label: 'email',
      type: 'text',
      defaultValue: 'test@domain.com',
      required: true,
      isEmail: true
    },
    {
      name: 'password',
      label: 'password',
      type: 'password',
      defaultValue: 'password',
      required: true,
    },
    {
      name: 'integer',
      label: 'integer',
      type: 'text',
      defaultValue: '1',
      isInteger: true,
    },
    {
      name: 'number',
      label: 'number',
      type: 'text',
      defaultValue: '1.0',
      isNumber: true,
    }
  ],
  primary: 'Ingresar',
  secondary: 'Olvidé mi contraseña',
}

class Login extends Component {
  constructor() {
    super();
    this.data = {
      loading: false,
      loggedIn: false,
      forgotPassword: false,
    }
    this.state = {...this.data}
  }

  redirectToDashboard () {
    return this.state.loggedIn
      ? <Redirect to='/dashboard' />
      : null
  }

  redirectToRecover () {
    return this.state.forgotPassword
      ? <Redirect to='/recover' />
      : null
  }

  handlePrimary = data => {
    console.log(data)
    // TODO: Call to api
    // this.setState({loggedIn: true})
  }

  handleSecondary = () => {
    this.setState({forgotPassword: true})
  }

  render () {
    const { loading } = this.state
    return (
      <section className='section'>
        <div className='container'>
          <Title
            title='Inicia sesión'
            subtitle='O crea una cuenta'
          />
          <Form
            loading={loading}
            handlePrimary={this.handlePrimary}
            handleSecondary={this.handleSecondary}
            {...form}
          />
          {this.redirectToDashboard()}
          {this.redirectToRecover()}
        </div>
      </section>
    )
  }
}

export default Login
