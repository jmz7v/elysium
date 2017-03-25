import React, { Component, PropTypes } from 'react'

class Privacy extends Component {
  render () {
    return (
      <div>
        <h1>Privacy</h1>
      </div>
    )
  }
}

Privacy.propTypes = {
  children: PropTypes.node
}

export default Privacy
