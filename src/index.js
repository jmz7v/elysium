// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Landing from "views/landing";
import Login from "views/login";
import Dashboard from "views/dashboard";
import { Analytics } from "views/analytics";

// Other
import "./styles/index.scss";

// Private routes
const App = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

// Bridge to render all private routes
const Private = (...routeProps) => (
  <Route {...routeProps} render={(props) => <App {...props} />} />
);

// Main router, provides auth an non-auth routes
const Elysium = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route path="/analytics" component={Analytics} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Landing} />
        <Route path="/:route" component={Private} />
      </Switch>
    </React.Fragment>
  </Router>
);

ReactDOM.render(<Elysium />, document.getElementById("root"));
