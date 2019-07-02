import React, { Component } from 'react';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from './helpers';
import Dashboard from './component/dashboard';
import Login from './component/login';
import ForgotPWD from './component/forgot-pwd';
import './css/page.css';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('user') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  render() {
    return (<Provider store={store}>
      <Router>

        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/forgotpwd" component={ForgotPWD} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          
          
          <Route component={Login} />
          
        </Switch>
      </Router>
    </Provider>
    );
  }
}

export default App;
