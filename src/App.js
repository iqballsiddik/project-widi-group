import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Admin from '../src/views/Dashboard';
import Login from './views/Login';
import Register from './views/Register';
import { Provider } from './context';
import Users from './views/Dashboard/users';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {

        // let role = window.localStorage.getItem('role').replace(/\s+/g, '').toString(); // comment to disable auth
        let role = window.localStorage.getItem('role') // comment to disable auth

        if (role) {
          if (`/${role.toLowerCase()}` === props.location.pathname) {
            return <Component {...props} />
          } else {
            return <Redirect to={{ pathname: `/${role.toLowerCase()}`, state: { from: props.location } }} />
          }
        } else {

          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
      }}
    />
  )
}



function PublicRoute({ component: Component, ...rest }) {
  const role = window.localStorage.getItem('role');
  const { path } = { ...rest }
  return (
    <Route
      {...rest}
      render={(props) => {

        if (role) {
          return <Redirect to={{ pathname: `/${role.toLowerCase()}`, state: { from: props.location } }} />
        } else if (path === '/register') {
          return <Register />
        } else {
          return <Login />
        }
      }}
    />
  )
}



function EntryRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => {
      let role = window.localStorage.getItem('role');

      // ketika url di hardcord sesudah login
      // maka langgsung redirect ke page role tersebut (/admin or /uses)
      // ketika role null maka akan di redirect ke page login
      if (role) {
        // role = role.replace(/\s+/g, '').toString()
        return <Redirect to={{ pathname: `/${role.toLowerCase()}`, state: { from: props.location } }} />
      } else {
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
    }} />
  )

}

function App() {
  const role = window.localStorage.getItem('role');
  let dashboard;

  if (role === "Admin") {
    dashboard = Admin
  } else if (role === "Users") {
    dashboard = Users
  } else {
    dashboard = Login
  }

  return (
    <Router>
      <Switch>
        <Provider>
          <EntryRoute path='/' exact component={Login} />
          <PublicRoute path='/login' exact component={Login} />
          <PublicRoute path='/register' exact component={Register} />
          <PrivateRoute path='/admin' exact component={Admin} />
          <PrivateRoute path='/users' exact component={Users} />
          {/* <Route path='/users' exact component={Users} /> */}
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
