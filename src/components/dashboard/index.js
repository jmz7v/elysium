// Libraries
import React, { Component } from 'react'

class Dashboard extends Component {
  render () {
    return (
      <nav class='navbar is-light' aria-label='main navigation'>
        <div class='navbar-brand'>
          <a class='navbar-item' href='https://bulma.io'>
            <img src='https://bulma.io/images/bulma-logo.png' alt='Bulma: a modern CSS framework based on Flexbox' width='112' height='28' />
          </a>

          <a role='button' class='navbar-burger' aria-label='menu' aria-expanded='false'>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
      </nav>
    )
  }
}

export default Dashboard
