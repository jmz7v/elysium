// Libraries
import React, { Component } from 'react';

// Other
import './index.css';

class Landing extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Elysium</h1>
          <h2 className="subtitle">React app</h2>
          <a className="button is-primary" href="/login">
            Login
          </a>
        </div>
      </section>
    );
  }
}

export default Landing;
