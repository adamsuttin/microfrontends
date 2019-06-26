import React, { Fragment } from 'react'
import { Header, Footer } from 'mf-shared-components'

import Dashboard from './components/Dashboard'

const NAVIGATION = [
  ['/', { label: 'Dashboard', active: true }],
  ['/countries/', { label: 'Countries' }],
  ['/airports/', { label: 'Airports' }]
]

const App = () => (
  <Fragment>
    <Header navigation={ NAVIGATION } />
    <Dashboard />
    <Footer />
  </Fragment>
)

export default App