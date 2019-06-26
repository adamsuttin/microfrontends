import React from 'react'
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, Footer } from 'mf-shared-components'

import store from './redux/store'

import { Countries, CountryDetails, NoRouteMatch } from './routes'

const defaultHistory = createBrowserHistory()

const NAVIGATION = [
  ['/', { label: 'Dashboard' }],
  ['/countries/', { label: 'Countries', active: true }],
  ['/airports/', { label: 'Airports' }]
]

const App = ({
  history = {}
}) => (
  <Provider store={store}>
    <BrowserRouter basename="/countries" history={history || defaultHistory}>
      <Header navigation={ NAVIGATION } />
      <Switch>
        <Route
          path="/:countryCode"
          exact
          component={CountryDetails}
        />
        <Route path="/" exact component={Countries} />
        <Route component={NoRouteMatch} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </Provider>
)

export default App
