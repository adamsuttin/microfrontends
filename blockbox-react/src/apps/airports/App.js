import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import store from './redux/store'

import Airports from './routes/airports/Airports'
import AirportDetails from './routes/airport-details/AirportDetails'

const App = () => (
  <Provider store={store}>
    <Route
      path="/airports/:countryCode/:airportCode"
      exact
      component={AirportDetails}
    />
    <Route
      path={ ['/airports/:countryCode', '/airports/'] }
      exact
      component={Airports}
    />
  </Provider>
)

export default App
