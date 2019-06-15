import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import DashboardApp from '../../dashboard/src/App'
const AirportsApp = lazy(() => import('../../airports/src/App'))
const CountriesApp = lazy(() => import('../../countries/src/App'))

import NoRoutesMatch from './NoRoutesMatch'

const AppShell = () => (
  <BrowserRouter>
    <header id="app--header">
      <Header />
    </header>
    <main id="app--main">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/airports" component={ AirportsApp } />
          <Route path="/countries" component={ CountriesApp } />
          <Route exact path="/" component={ DashboardApp } />
          <Route component={ NoRoutesMatch } />
      </Switch>
      </Suspense>
    </main>
    <footer id="app--footer">
      <Footer />
    </footer>
  </BrowserRouter>
)

export default AppShell