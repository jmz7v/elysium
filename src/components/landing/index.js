// Libraries
import React, { Component } from 'react'

// Other
import './index.css'

class Landing extends Component {
  render () {
    return (
      <section class='section'>
        <div class='container'>
          <h1 class='title'>Elysium</h1>
          <h2 class='subtitle'>React app</h2>
          <a class='button is-primary' href='/login'>Login</a>
        </div>
      </section>
    )
  }
}

export default Landing
