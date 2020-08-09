import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Admin from '../src/views/Dashboard';
import Login from './views/Login';
import Register from './views/Register';
import { Provider } from './context';
import Users from './views/Dashboard/users';

function App() {
  return (
    <Router>
      <Switch>
        <Provider>
          <Route path='/' exact component={Login} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/user' exact component={Users} />
          <Route path='/register' exact component={Register} />
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
