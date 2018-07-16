// Libraries
import React, { Component } from 'react'

class Nav extends Component {
  constructor (props) {
    super()
    this.data = {
    }
    this.state = {...this.data}
  }

  render () {
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
}

Nav.propTypes = {
}

Nav.defaultProps = {
}

export default Nav
