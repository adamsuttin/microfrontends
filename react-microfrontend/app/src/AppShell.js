import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MicroFrontend from './components/MicroFrontend'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// NOTE: This should be somewhere in an env config
const dashboardHost = 'http://localhost:4001'
const countriesHost = 'http://localhost:4002'
const airportsHost = 'http://localhost:4003'

const Dashboard = ({ history }) => (
  <MicroFrontend
    history={history}
    host={dashboardHost}
    name="Dashboard" />
);
const Countries = ({ history }) => (
  <MicroFrontend
    history={history}
    host={countriesHost}
    name="Countries" />
);
const Airports = ({ history }) => (
  <MicroFrontend
    history={history}
    host={airportsHost}
    name="Airports" />
);

const AppShell = () => (
  <BrowserRouter>
    <Fragment>
    <header id="app--header">
      <Header />
    </header>
    <main id="app--main">
      <Switch>
        <Route exact path="/airports" component={ Airports } />
        <Route exact path="/countries" component={ Countries } />
        <Route exact path="/" component={ Dashboard } />
      </Switch>
    </main>
    <footer id="app--footer">
      <Footer />
    </footer>
    </Fragment>
  </BrowserRouter>
)

AppShell.displayName = 'AppShell'

export default AppShell