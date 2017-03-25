import React, { Component, PropTypes } from 'react'

class About extends Component {
  render () {
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
}

About.propTypes = {
  children: PropTypes.node
}

export default About
