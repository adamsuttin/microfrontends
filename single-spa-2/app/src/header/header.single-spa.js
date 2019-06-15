import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

import Header from './Header'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
  domElementGetter: () => document.getElementById('app--header')
})

export const bootstrap = [lifecycles.bootstrap]

export const mount = [lifecycles.mount]

export const unmount = [lifecycles.unmount]
