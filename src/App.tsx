import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Table from './components/Table'
import { User } from './components/User'
import { MyAccount } from './components/MyAccount'
import { PrivateRoute } from './common/PrivateRoute'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './theme/theme'

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme = { theme }>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path = "/table" isAdminRoute component = { Table }/>
            <PrivateRoute path = "/my-account" component = { MyAccount }/>
            <PrivateRoute path = "/user" isAdminRoute component = { User }/>
            <Route path = "/" component = { Home } exact/>
            <Route path = "/log-in" component = { LogIn }/>
            <Route path = "/sign-up" component = { SignUp }/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;