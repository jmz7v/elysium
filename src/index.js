// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import App from 'components/app';

// Other
import './index.css';
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
