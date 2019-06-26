import React, { useState } from 'react'
import { navigateToUrl } from 'single-spa'

import './header.css'

const NAVIGATION = [
  ['/', { label: 'Dashboard' }],
  ['/countries', { label: 'Countries' }],
  ['/airports', { label: 'Airports' }]
]

const NavigationMenu = ({
  ...rest
}) => {
  const [pathname, setPathname] = useState('/')
  
  return (
    <ul {...rest}>
      { NAVIGATION.map(entry => (
        <li key={ entry[1].label.toLowerCase()}>
          <a href={ entry[0]}
            onClick={ event => {
              const href = event.target.getAttribute('href');
              setPathname(href)
              navigateToUrl(event)
            }}
            className={ pathname === entry[0] ? 'active' : 'not-active' }>{ entry[1].label }</a>
        </li>
      ))}
    </ul>
  )
}

const Header = () => {

  let { pathname } = window.location

  window.onpopstate = event => {
    console.log('popstate event', event)
    pathname = event.state
  }

  return (
    <nav className="app-nav" role="navigation">
      <h1>Single SPA</h1>
      <NavigationMenu role="navigation" pathname={ pathname } />
    </nav>
  )
}

export default Header
