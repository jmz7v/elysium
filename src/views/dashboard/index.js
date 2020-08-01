// Libraries
import React, { Component } from "react";

// Components
import Nav from "components/nav";
import Title from "components/title";
import Tabs, { TabList, Tab, TabPanels, Panel, SetStep } from "components/tabs";
import { Button } from "components/Button";
import Input from "components/input";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Title title="Dashboard" />
        <Tabs>
          <TabList disabled={false}>
            <Tab>Holi</Tab>
            <Tab>Holi 2</Tab>
            <Tab>Holi 3</Tab>
          </TabList>
          <TabPanels>
            <Panel>
              Panel
              <br />
              <SetStep step={1}>Siguiente</SetStep>
            </Panel>
            <Panel>
              Panel 2
              <br />
              <SetStep step={0}>Anterior</SetStep>
              <SetStep step={2}>Siguiente</SetStep>
            </Panel>
            <Panel>
              Panel 3
              <br />
              <SetStep step={1}>Anterior</SetStep>
            </Panel>
          </TabPanels>
        </Tabs>
        <Button />
        <Input />
      </React.Fragment>
    );
  }
}

export default Dashboard;
