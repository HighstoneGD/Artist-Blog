import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Table from './components/Table'
import User from './components/User'
import { PrivateRoute } from './common/PrivateRoute'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute path = "/table" isAdminRoute component = { Table }/>
          <PrivateRoute path = "/user" isAdminRoute component = { User }/>
          <PrivateRoute path = "/" component = { Home } exact/>
          <Route path = "/log-in" component = { LogIn }/>
          <Route path = "/sign-up" component = { SignUp }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;