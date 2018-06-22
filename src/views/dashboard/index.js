// Libraries
import React, { Component } from 'react'

// Components
import Tabs from 'components/tabs'

class Dashboard extends Component {
  renderNav () {
    return (
      <nav className='navbar is-light' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img src='https://bulma.io/images/bulma-logo.png' alt='Bulma: a modern CSS framework based on Flexbox' width='112' height='28' />
          </a>

          <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false'>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
      </nav>
    )
  }

  render () {
    return (
      <React.Fragment>
        {this.renderNav()}
        <Tabs />
      </React.Fragment>
    )
  }
}

export default Dashboard
