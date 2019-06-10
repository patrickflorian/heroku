import React, { Component } from 'react';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from './store/config'
import Dashboard from './component/dashboard'
import Login from './component/login'
import ForgotPWD from './component/forgot-pwd'
import './css/page.css';

import UserForm from './component/userForm'


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
function Protected() {
  return <h3>Protected</h3>;
}
class App extends Component {
  render() {
    return (<Provider store={Store}>
      <Router>

        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/forgotpwd" component={ForgotPWD} />
          <Route path="/user" component={UserForm}/>
          <Route path="/" component={Login} />
          <Route component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </Switch>

      </Router>
    </Provider>
    );
  }
}

export default App;
