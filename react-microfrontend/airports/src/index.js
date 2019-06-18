import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

window.renderAirports = function (id, history) {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(id),
  )
}

window.unmountAirports = function (id) {
  ReactDOM.unmountComponentAtNode(document.getElementById(id))
}
