import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import store from './redux/store'

import Countries from './routes/countries/Countries'
import CountryDetails from './routes/country-details/CountryDetails'

const App = ({ apiBaseURL }) => (
  <Provider store={store}>
    <Route
      path="/countries/:countryCode"
      exact
      component={CountryDetails}/>
    <Route path="/countries/" exact component={Countries} />
  </Provider>
)

export default App
