import React, { Component, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { navigateToUrl } from 'single-spa'

import './header.css'

const NAVIGATION = [
  ['/', { label: 'Dashboard' }],
  ['/countries', { label: 'Countries' }],
  ['/airports', { label: 'Airports' }]
]

const NavigationMenu = ({
  location = {},
  match = {},
  ...rest
}) => {
  const { pathname } = location
  useEffect(() => {
    console.log('pathname', pathname)
  }, [pathname])
  return (
    <ul {...rest}>
      { NAVIGATION.map(entry => (
        <li key={ entry[1].label.toLowerCase()}>
          <a href={ entry[0]}
            onClick={navigateToUrl}
            className={ pathname === entry[0] ? 'active' : 'not-active' }>{ entry[1].label }</a>
        </li>
      ))}
    </ul>
  )
}

const Header = ({
  location,
  match
}) => {
  return (
    <nav className="app-nav" role="navigation">
      <h1>Monolith</h1>
      <NavigationMenu role="navigation" location={location} match={match}/>
    </nav>
  )
}

export default withRouter(Header)
