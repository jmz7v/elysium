// Libraries
import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

// About Page
class About extends Component {
  // Constructor
  constructor(props) {
    super(props)
    this.pageTitle = 'Acerca de'
    this.data = {
    }
    this.state = Object.assign({}, this.data)
  }
  // Main render
  render () {
    return (
      <DocumentTitle title={this.pageTitle + ' · ' + process.env.APP_NAME}>
        <h1>{this.pageTitle}</h1>
      </DocumentTitle>
    )
  }
}

About.propTypes = {
  children: PropTypes.node
}

export default About
