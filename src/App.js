import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from '../src/views/Dashboard';
import Login from './views/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
