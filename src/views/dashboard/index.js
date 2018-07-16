
// Libraries
import React, { Component } from 'react'

// Components
import Nav from 'components/nav'
import Title from 'components/title'
import Tabs from 'components/tabs'
import Button from 'components/button'
import Input from 'components/input'

class Dashboard extends Component {
  render () {
    return (
      <React.Fragment>
        <Nav />
        <Title
          title='Dashboard'
        />
        <Tabs />
        <Button />
        <Input />
      </React.Fragment>
    )
  }
}

export default Dashboard
