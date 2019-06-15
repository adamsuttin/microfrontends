import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import store from './redux/store'

import { Countries, CountryDetails, NoRouteMatch } from './routes'

const App = ({ apiBaseURL }) => (
  <Provider store={store}>
    <BrowserRouter basename="/countries">
      <Switch>
        <Route
          path="/:countryCode"
          exact
          component={CountryDetails}
        />
        <Route path="/" exact component={Countries} />
        <Route component={NoRouteMatch} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
