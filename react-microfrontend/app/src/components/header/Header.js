import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

const NAVIGATION = [
  ['/', { label: 'Dashboard' }],
  ['/countries', { label: 'Countries' }],
  ['/airports', { label: 'Airports' }]
]

const NavigationMenu = ({
  ...rest
}) => (
  <ul {...rest}>
  { NAVIGATION.map(entry => (
    <li key={ entry[1].label.toLowerCase()}>
      <NavLink to={ entry[0]}>{ entry[1].label }</NavLink>
    </li>
  ))}
  </ul>
)

const Header = () => (
  <nav className="app-nav" role="navigation">
    <h1>React MicroFrontend</h1>
    <NavigationMenu />
  </nav>
)

export default Header
