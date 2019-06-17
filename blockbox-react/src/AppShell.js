import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import NoRoutesMatch from './NoRoutesMatch'

import './css/app.css'
import './css/app-layout.css'

const Dashboard = lazy(() => import('./apps/dashboard/App'))
const Airports = lazy(() => import('./apps/airports/App'))
const Countries = lazy(() => import('./apps/countries/App'))

const LoadingApp = () => (
  <div>Loading...</div>
)

const AppShell = () => (
  <BrowserRouter>
    <header id="app--header">
      <Header />
    </header>
    <main id="app--main">
      <Suspense fallback={ <LoadingApp /> }>
        <Switch>
          <Route path="/airports/" component={ Airports } />
          <Route path="/countries/" component={ Countries } />
          <Route exact path="/" component={ Dashboard } />
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
