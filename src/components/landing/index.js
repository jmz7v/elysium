// Libraries
import React, { Component } from 'react';

// Components
import logo from 'components/logo/logo.svg';

// Other
import './index.css';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <header className="Landing-header">
          <img src={logo} className="Landing-logo" alt="logo" />
          <h1 className="Landing-title">Welcome to React</h1>
        </header>
        <p className="Landing-intro">
          To get started, edit <code>src/Landing.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Landing;
