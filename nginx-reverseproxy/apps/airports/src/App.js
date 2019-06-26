import React from 'react'
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, Footer } from 'mf-shared-components'

import store from './redux/store'

import { Airports, AirportDetails, NoRouteMatch } from './routes'

const defaultHistory = createBrowserHistory()

const NAVIGATION = [
  ['/', { label: 'Dashboard' }],
  ['/countries/', { label: 'Countries' }],
  ['/airports/', { label: 'Airports', active: true }]
]

const App = ({
  history = {}
}) => (
  <Provider store={store}>
    <BrowserRouter basename="/airports" history={history || defaultHistory}>
      <Header navigation={ NAVIGATION } />
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
      <Footer />
    </BrowserRouter>
  </Provider>
)

export default App
