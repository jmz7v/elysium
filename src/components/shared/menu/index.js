import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Menu extends Component {
  render () {
    return (
      <nav className='nav has-shadow'>
        <div className='container'>
          <div className='nav-left'>
            <a className='nav-item'>
              <img src='http://bulma.io/images/bulma-logo.png' alt='Bulma logo' />
            </a>
            <a className='nav-item is-tab is-hidden-mobile is-active'>Home</a>
            <a className='nav-item is-tab is-hidden-mobile'>Features</a>
            <a className='nav-item is-tab is-hidden-mobile'>Pricing</a>
            <a className='nav-item is-tab is-hidden-mobile'>About</a>
          </div>
          <span className='nav-toggle'>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className='nav-right nav-menu'>
            <a className='nav-item is-tab is-hidden-tablet is-active'>Home</a>
            <a className='nav-item is-tab is-hidden-tablet'>Features</a>
            <a className='nav-item is-tab is-hidden-tablet'>Pricing</a>
            <a className='nav-item is-tab is-hidden-tablet'>About</a>
            <a className='nav-item is-tab'>
              <figure className='image is-16x16'>
                <img src='http://bulma.io/images/jgthms.png' />
              </figure>
              Profile
            </a>
            <a className='nav-item is-tab'>Log out</a>
          </div>
        </div>
      </nav>
    )
  }
}

Menu.propTypes = {
  children: PropTypes.node
}

export default Menu
