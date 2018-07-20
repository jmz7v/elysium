// Libraries
import React, { Component } from 'react'

// Components
import Title from 'components/title'
import Form from 'components/form'

const form = {
  title: 'Ingresa',
  fields: [
    {
      name: 'input',
      label: 'email',
      kind: 'text',
    },
    {
      name: 'input',
      label: 'password',
      kind: 'password',
    }
  ],
  primary: {
    text: 'Ingresar',
    action: () => { console.log('Ingresar') }
  },
  secondary: {
    text: 'Olvidé mi contraseña',
    action: () => { console.log('Recuperar') }
  }
}

class Login extends Component {
  render () {
    return (
      <section className='section'>
        <div className='container'>
          <Title
            title='Inicia sesión'
            subtitle='O crea una cuenta'
          />
          <Form
            title={form.title}
            primary={form.primary}
            fields={form.fields}
            secondary={form.secondary}
          />
        </div>
      </section>
    )
  }
}

export default Login
