// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const exampleTabs = [
  {
    label: 'Example tab 1'
  },
  {
    label: 'Example tab 2'
  }
]

class Tabs extends Component {
  constructor (props) {
    super()
    this.data = {
      active: props.default
    }
    this.state = {...this.data}
  }

  setTab (active) {
    this.setState({active})
  }

  renderItem ({label}) {
    return (
      <li
        key={label}
        className={(this.state.active === label) ? 'is-active' : null}
        onClick={() => { this.setTab(label) }}
      >
        <a>{label}</a>
      </li>
    )
  }

  render () {
    return (
      <div className='tabs'>
        <ul>
          {this.props.tabs.map(tab => this.renderItem(tab))}
        </ul>
      </div>
    )
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array,
  default: PropTypes.string
}

Tabs.defaultProps = {
  tabs: exampleTabs,
  default: exampleTabs[0].label
}

export default Tabs
