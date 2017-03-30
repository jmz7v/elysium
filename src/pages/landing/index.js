// Libraries
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
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
        <div>
          <h1>{this.pageTitle}</h1>
          <Link to='/'>landing</Link><br />
          <Link to='/login'>login</Link><br />
          <Link to='/about'>about</Link><br />
          <Link to='/terms'>terms</Link><br />
          <Link to='/privacy'>privacy</Link><br />
          <Link to='/dashboard'>dashboard</Link><br />
        </div>
      </DocumentTitle>
    )
  }
}

Landing.propTypes = {
  children: PropTypes.node
}

export default Landing
