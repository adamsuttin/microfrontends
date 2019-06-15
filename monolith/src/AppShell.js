import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import store from './redux/store'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import {
  Airports,
  AirportDetails,
  Countries,
  CountryDetails,
  Dashboard,
  NoRoutesMatch
} from './routes'

const AppShell = () => (
  <Provider store={store}>
    <BrowserRouter>
      <header id="app--header">
        <Header />
      </header>
      <main id="app--main">
        <Switch>
          <Route path="/airports/:airportCode" component={ AirportDetails } />
          <Route path="/airports" component={ Airports } />
          <Route path="/countries/:countryCode" component={ CountryDetails } />
          <Route path="/countries" component={ Countries } />
          <Route exact path="/" component={ Dashboard } />
          <Route component={ NoRoutesMatch } />
        </Switch>
      </main>
      <footer id="app--footer">
        <Footer />
      </footer>
    </BrowserRouter>
  </Provider>
)

export default AppShell