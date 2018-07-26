// Libraries
import React, { Component } from 'react'
import classNames from 'classnames'

// Single tab
export const Tab = ({ onClick, active, children, ...props }) => (
  <li
    className={classNames({'is-active': active})}
    onClick={!props.disabled ? onClick : null}
  >
    <a>{children}</a>
  </li>
)

// Group of tabs
export const TabList = ({children, active, onClick, ...props}) =>
  React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      active: index === active,
      disabled: props.disabled,
      onClick: () => onClick(index)
    })
  )

// Single panel
export const Panel = ({ active, children }) => (
  <div className='panel'>
    {children}
  </div>
)

// Panel wrapper, only shows the one with same index as Tabs.state.active
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

    return (
      <div className='panels'>
        {panels}
      </div>
    )
  }

  children (children = this.props.children) {
    return React.Children.map(children, (child, i) => {
      switch (child.type) {
        case TabList:
          return this.renderTabList(child)
        case TabPanels:
          return this.renderPanels(child)
        default:
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
