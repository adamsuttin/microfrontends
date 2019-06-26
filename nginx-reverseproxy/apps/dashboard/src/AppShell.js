import React, { Fragment } from 'react'

import { Header, Footer } from '@mf/shared-components'

import Dashboard from './components/Dashboard'

const NAVIGATION = [
  ['/', { label: 'Dashboard', active: true }],
  ['/countries/', { label: 'Countries' }],
  ['/airports/', { label: 'Airports' }]
]

const AppShell = () => (
  <Fragment>
    <header id="app--header">
      <Header navigation={ NAVIGATION } />
    </header>
    <main id="app--main">
      <Dashboard />
    </main>
    <footer id="app--footer">
      <Footer />
    </footer>
  </Fragment>
)

export default AppShell