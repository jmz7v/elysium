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

  renderHead ({ title } = this.props) {
    return (
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`${title} – ${APP_NAME}`}</title>
      </Helmet>
    )
  }

  renderSubtitle ({ subtitle } = this.props) {
    return <h2 className='subtitle'>{subtitle}</h2>
  }

  // Main render
  render () {
    const { title, documentTitle } = this.props
    return (
      <React.Fragment>
        <h1 className='title'>{title}</h1>
        {(documentTitle) ? this.renderHead() : null}
        {(subtitle) ? this.renderSubtitle() : null}
      </React.Fragment>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  documentTitle: PropTypes.bool
}

Title.defaultProps = {
  title: 'Elysium title',
  subtitle: null,
  documentTitle: true
}

export default Title
