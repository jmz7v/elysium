import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
        <div>
            <h1>{'React App'}</h1>
            <ul>
                <li><Link to="/">{'Home'}</Link></li>
            </ul>
        </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
