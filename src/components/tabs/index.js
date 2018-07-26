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

class Tabs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: this.props.active
    }
  }

  children (children = this.props.children) {
    return React.Children.map(children, (child, i) => {
      if (child.type === TabList) {
        return React.cloneElement(child, {
          active: this.state.active,
          onClick: active => this.setState({active})
        })
      } else {
        return child
      }
    })
  }

  render () {
    return (
      <div className='tabs'>
        <ul>
          {this.children()}
        </ul>
      </div>
    )
  }
}

Tabs.propTypes = {}

Tabs.defaultProps = {
  active: 0
}

export default Tabs
