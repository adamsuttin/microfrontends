import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import store from './redux/store'

import { Airports, AirportDetails, NoRouteMatch } from './routes'

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename="/airports">
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
    </BrowserRouter>
  </Provider>
)

export default App
