// Libraries
import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

// Landing Page
class Landing extends Component {
  // Constructor
  constructor(props) {
    super(props)
    this.pageTitle = 'Bienvenido'
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

Landing.propTypes = {
  children: PropTypes.node
}

export default Landing
