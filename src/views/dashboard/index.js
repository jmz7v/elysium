// Libraries
import React, { Component } from 'react'

// Components
import Nav from 'components/nav'
import Tabs from 'components/tabs'
import Button from 'components/button'

class Dashboard extends Component {
  render () {
    return (
      <React.Fragment>
        <Nav />
        <Tabs />
        <Button />
      </React.Fragment>
    )
  }
}

export default Dashboard
