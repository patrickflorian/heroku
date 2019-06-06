import React, { Component } from 'react';

import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from './store/config'
import Dashboard from './component/dashboard'
import Login from './component/login'
import './css/page.css';

class App extends Component {
  render() {
    return (<Provider store={Store}>
      <Router>

        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/" component={Login} />
          <Route component={Login} />
        </Switch>

      </Router>
    </Provider>
    );
  }
}

export default App;
