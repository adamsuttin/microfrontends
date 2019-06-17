import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import './header.css'

const NAVIGATION = [
  ['/', { label: 'Dashboard' }],
  ['/countries/', { label: 'Countries' }],
  ['/airports/', { label: 'Airports' }]
]

const NavigationMenu = ({
  location = {},
  match = {},
  ...rest
}) => (
  <ul {...rest}>
    { NAVIGATION.map(entry => (
    <li key={ entry[1].label.toLowerCase()}>
      <NavLink exact to={ entry[0]}>{ entry[1].label }</NavLink>
    </li>
    ))}
  </ul>
)

NavigationMenu.displayName = 'NavigationMenu'


const Header = ({
  location,
  match
}) => {
  return (
    <nav className="app-nav" role="navigation">
      <h1>Blockbox</h1>
      <NavigationMenu role="navigation" location={location} match={match}/>
    </nav>
  )
}

Header.displayName = 'Header'

export default withRouter(Header)
