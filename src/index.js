// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import App from 'components/app';
import Login from 'components/login';

// Other
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Private = (...props) => (
  <Route
    {...props}
    render={p => 'Yo'}
  />
)

// Main router, provides auth an non-auth routes
const Elysium = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route path='/login' component={Login} />
        <Route exact path='/' component={App} />
        <Route path='/:route' component={Private} />
      </Switch>
    </React.Fragment>
  </Router>
)

ReactDOM.render(<Elysium />, document.getElementById('root'))
registerServiceWorker();
