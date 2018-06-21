// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Landing from 'components/landing';
import Login from 'components/login';
import Dashboard from 'components/dashboard';

// Other
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Private routes
const App = () => (
  <Switch>
    <Route path='/dashboard' component={Dashboard} />
  </Switch>
)

// Bridge to render all private routes
const Private = (...routeProps) => (
  <Route
    {...routeProps}
    render={props => <App {...props} />}
  />
)

// Main router, provides auth an non-auth routes
const Elysium = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Landing} />
        <Route path='/:route' component={Private} />
      </Switch>
    </React.Fragment>
  </Router>
)

ReactDOM.render(<Elysium />, document.getElementById('root'))
registerServiceWorker();
