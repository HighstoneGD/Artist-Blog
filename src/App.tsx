import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { SignUp, LogIn, Home, Users, MyAccount, User, Blog } from './components'
import { PrivateRoute } from './common/PrivateRoute/PrivateRoute'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './theme/theme'

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme = { theme }>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path = "/users" isAdminRoute component = { Users }/>
            <PrivateRoute path = "/my-account" component = { MyAccount }/>
            <PrivateRoute path = "/user" isAdminRoute component = { User }/>
            <Route path = "/blog" component = { Blog }/>
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