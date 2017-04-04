// Libraries
import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import DocumentTitle from 'react-document-title'

// Landing Page
class Landing extends Component {
  // Constructor
  constructor (props) {
    super(props)
    this.pageTitle = 'Bienvenido'
    this.data = {
    }
    this.state = Object.assign({}, this.data)
  }
  // Main render
  render () {
    return (
      <DocumentTitle title={this.pageTitle + ' · ' + process.env.APP_NAME}>
        <div>
          <section className='hero is-primary is-medium'>
            <div className='hero-head'>
              <header className='nav'>
                <div className='container'>
                  <div className='nav-left'>
                    <a className='nav-item'>
                      <img src='images/bulma-type-white.png' alt='Logo' />
                    </a>
                  </div>
                  <span className='nav-toggle'>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <div className='nav-right nav-menu'>
                    <a className='nav-item is-active'>
                      Inicio
                    </a>
                    <a className='nav-item'>
                      Precio
                    </a>
                    <span className='nav-item' onClick={() => { browserHistory.push('/login') }}>
                      <a className='button is-primary is-inverted'>
                        <span>Ingresar</span>
                      </a>
                    </span>
                  </div>
                </div>
              </header>
            </div>

            <div className='hero-body'>
              <div className='container has-text-centered'>
                <h1 className='title'>{process.env.APP_NAME}</h1>
                <h2 className='subtitle'>{process.env.APP_DESCRIPTION}</h2>
              </div>
            </div>

            <div className='hero-foot'>
              <nav className='tabs'>
                <div className='container'>
                  <ul>
                    <li><Link to='/login'>login</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/terms'>terms</Link></li>
                    <li><Link to='/privacy'>privacy</Link></li>
                    <li><Link to='/dashboard'>dashboard</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }
}

Landing.propTypes = {
  children: PropTypes.node
}

export default Landing
