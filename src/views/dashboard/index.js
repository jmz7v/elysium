// Libraries
import React, { Component } from 'react'

// Components
import Nav from 'components/nav'
import Tabs from 'components/tabs'

class Dashboard extends Component {
  render () {
    return (
      <React.Fragment>
        <Nav />
        <Tabs />
      </React.Fragment>
    )
  }
}

export default Dashboard
