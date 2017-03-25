// Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

// Pages
import Landing from './pages/landing'
import Login from './pages/login'
import About from './pages/about'
import Terms from './pages/terms'
import Privacy from './pages/privacy'

// App
import App from './components/app'

render((
  <Router history={browserHistory}>
    <Route component={Landing} path='/' />
    <Route component={Login} path='/login' />
    <Route component={About} path='/about' />
    <Route component={App} path='/dashboard' />
  </Router>
), document.getElementById('app'))
