import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header, Footer } from '@mf/shared-components'

import store from './redux/store'

import { Countries, CountryDetails, NoRouteMatch } from './routes'

const NAVIGATION = [
  ['/', { label: 'Dashboard' }],
  ['/countries/', { label: 'Countries', active: true }],
  ['/airports/', { label: 'Airports' }]
]

const AppShell = () => (
  <Provider store={store}>
    <BrowserRouter basename="/countries">
      <header id="app--header">
        <Header navigation={ NAVIGATION } />
      </header>
      <main id="app--main">
        <Switch>
          <Route
            path="/:countryCode"
            exact
            component={CountryDetails}
          />
          <Route path="/" exact component={Countries} />
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
