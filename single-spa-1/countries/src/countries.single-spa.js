import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

import CountriesApp from './app'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: CountriesApp,
  domElementGetter: () => document.getElementById('app--main')
})

export const bootstrap = [lifecycles.bootstrap]

export const mount = [lifecycles.mount]

export const unmount = [lifecycles.unmount]
