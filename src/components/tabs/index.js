// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'

// Single tab
export const Tab = ({ onClick, active, children }) => (
  <li
    className={classNames({'is-active': active})}
    onClick={onClick}
  >
    <a>{children}</a>
  </li>
)

// Group of tabs
export const TabList = ({children, active, onClick}) =>
  React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      active: index === active,
      onClick: () => onClick(index)
    })
  )

export const Panel = ({ active, children }) => (
  <div className='panel'>
    {children}
  </div>
)

export const TabPanels = ({children, active}) =>
  React.Children.map(children, (child, index) =>
    (index === active)
      ? React.cloneElement(child, {
        active: index === active
      })
      : null
  )

class Tabs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: this.props.active
    }
  }

  renderTabList (child) {
    const tabList = React.cloneElement(child, {
      active: this.state.active,
      onClick: active => this.setState({active})
    })

    return (
      <div className='tabs'>
        <ul>
          {tabList}
        </ul>
      </div>
    )
  }

  renderPanels (child) {
    const panels = React.cloneElement(child, {
      active: this.state.active
    })

    return panels
  }

  children (children = this.props.children) {
    return React.Children.map(children, (child, i) => {
      if (child.type === TabList) {
        return this.renderTabList(child)
      } else if (child.type === TabPanels) {
        return this.renderPanels(child)
      } else {
        return child
      }
    })
  }

  render () {
    return (

      <div className='container'>
        {this.children()}
      </div>
    )
  }
}

Tabs.propTypes = {}

Tabs.defaultProps = {
  active: 0
}

export default Tabs
