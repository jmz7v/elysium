// Libraries
import React, { Component } from 'react'

const tabs = [
  {
    label: 'Pictures'
  },
  {
    label: 'Music'
  },
  {
    label: 'Videos'
  },
  {
    label: 'Documents'
  }
]

class Tabs extends Component {
  constructor (props) {
    super()
    this.data = {
      active: props.default || tabs[0].label
    }
    this.state = {...this.data}
  }

  setTab (active) {
    this.setState({active})
  }

  renderItem ({label}) {
    const active = (this.state.active === label) ? 'is-active' : null
    return (
      <li
        key={label}
        className={active}
        onClick={() => { this.setTab(label) }}
      ><a>{label}</a></li>
    )
  }

  render () {
    return (
      <div className='tabs'>
        <ul>
          {tabs.map(tab => this.renderItem(tab))}
        </ul>
      </div>
    )
  }
}

export default Tabs
