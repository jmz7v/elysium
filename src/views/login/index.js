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
      kind: 'text',
      validate: ['required']
    },
    {
      name: 'password',
      label: 'password',
      kind: 'password',
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
