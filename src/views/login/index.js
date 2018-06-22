// Libraries
import React, { Component } from 'react'

// Components
import Title from 'components/title'

class Login extends Component {
  render () {
    return (
      <section class='section'>
        <div class='container'>
          <Title
            title='Inicia sesión'
            subtitle='O crea una cuenta'
          />
          <a class='button is-primary' href='/dashboard'>Ingresar</a>
        </div>
      </section>
    )
  }
}

export default Login
