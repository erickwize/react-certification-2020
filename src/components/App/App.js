import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ContextProvider } from '../../context/context'
import AuthProvider from '../../providers/Auth'
import Home from '../../pages/Home/Home.page'
import SecretPage from '../../pages/Secret'
import Private from '../Private/Private'
import Layout from '../Layout/Layout'

const App = React.memo(() => (
  <BrowserRouter>
    <AuthProvider>
      <ContextProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Home />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </ContextProvider>
    </AuthProvider>
  </BrowserRouter>
))

export default App
