import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

import DashboardApp from './App'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: DashboardApp,
  domElementGetter: () => document.getElementById('app--main')
})

export const bootstrap = [
  lifecycles.bootstrap,
];

export const mount = [
  lifecycles.mount,
];

export const unmount = [
  lifecycles.unmount,
];