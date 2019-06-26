import React from 'react'
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header, Footer } from '@mf/shared-components'

import store from './redux/store'

import { Airports, AirportDetails, NoRouteMatch } from './routes'

const NAVIGATION = [
  ['/', { label: 'Dashboard' }],
  ['/countries/', { label: 'Countries' }],
  ['/airports/', { label: 'Airports', active: true }]
]

const AppShell = () => (
  <Provider store={store}>
    <BrowserRouter basename="/airports">
      <header id="app--header">
        <Header navigation={ NAVIGATION } />
      </header>
      <main id="app--main">
        <Switch>
          <Route
            path="/:countryCode/:airportCode"
            exact
            component={AirportDetails}
          />
          <Route
            path={ ['/:countryCode', '/'] }
            exact
            component={Airports}
          />
          <Route component={NoRouteMatch} />
        </Switch>
      </main>
      <footer id="app--footer">
        <Footer />
      </footer>
    </BrowserRouter>
  </Provider>
)

export default AppShell
