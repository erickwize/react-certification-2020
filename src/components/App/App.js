import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ContextProvider from '../../context/context'
import AuthProvider from '../../providers/Auth'
import HomePage from '../../pages/Home/Home.page'
import LoginPage from '../../pages/Login'
import NotFound from '../../pages/NotFound'
import SecretPage from '../../pages/Secret'
import Private from '../Private/Private'
import Fortune from '../Fortune/Fortune'
import Layout from '../Layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ContextProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Fortune />
          </Layout>
        </ContextProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
