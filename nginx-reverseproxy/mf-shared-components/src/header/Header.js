import React from 'react'

import './header.css'

const NavigationMenu = ({
  data = [],
  ...rest
}) => (
  <ul {...rest}>
  { data.map(entry => (
    <li key={ entry[1].label.toLowerCase()}>
      <a href={ entry[0]} className={ `${entry.active ? 'active' : '' }` }>{ entry[1].label }</a>
    </li>
  ))}
  </ul>
)

const Header = ({
  navigation = []
}) => (
  <nav className="app-nav" role="navigation">
    <h1>React MicroFrontend</h1>
    <NavigationMenu data={ navigation } />
  </nav>
)

export default Header
