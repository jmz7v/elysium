// Libraries
import React, { Component } from 'react'

class Tabs extends Component {
  render () {
    return (
      <div class='tabs'>
        <ul>
          <li class='is-active'><a>Pictures</a></li>
          <li><a>Music</a></li>
          <li><a>Videos</a></li>
          <li><a>Documents</a></li>
        </ul>
      </div>
    )
  }
}

export default Tabs
