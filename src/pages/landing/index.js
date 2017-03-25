import React, { Component, PropTypes } from 'react'

class Landing extends Component {
  render () {
    return (
      <div>
        <h1>Landing</h1>
      </div>
    )
  }
}

Landing.propTypes = {
  children: PropTypes.node
}

export default Landing
