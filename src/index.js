import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Elysium = props => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </React.Fragment>
  </Router>
)

ReactDOM.render(<Elysium />, document.getElementById('root'))
registerServiceWorker();
