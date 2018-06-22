// Libraries
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Components

// Other
const APP_NAME = 'Elysium React Boilerplate'

class Title extends Component {
  constructor (props) {
    super()
    this.data = {}
    this.state = {...this.data}
  }

  renderHead () {
    const { title } = this.props
    return (
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`${title} – ${APP_NAME}`}</title>
      </Helmet>
    )
  }

  renderSubtitle () {
    const { subtitle } = this.props
    return (subtitle)
      ? <h2 className='subtitle'>{subtitle}</h2>
      : null
  }

  // Main render
  render () {
    const { title, subtitle } = this.props
    return (
      <React.Fragment>
        <h1 className='title'>{title}</h1>
        {this.renderHead()}
        {this.renderSubtitle()}
      </React.Fragment>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

Title.defaultProps = {
  title: 'Elysium title',
  subtitle: null
}

export default Title
