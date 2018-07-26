
// Libraries
import React, { Component } from 'react'

// Components
import Nav from 'components/nav'
import Title from 'components/title'
import Tabs, { TabList, Tab, TabPanels, Panel } from 'components/tabs'
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
        <Tabs>
          <TabList>
            <Tab>Holi</Tab>
            <Tab>Holi 2</Tab>
            <Tab>Holi 3</Tab>
          </TabList>
          <TabPanels>
            <Panel>Panel</Panel>
            <Panel>Panel 2</Panel>
            <Panel>Panel 3</Panel>
          </TabPanels>
        </Tabs>
        <Button />
        <Input />
      </React.Fragment>
    )
  }
}

export default Dashboard
