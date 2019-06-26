import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

window.renderCountries = function (id, history) {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(id),
  )
}

window.unmountCountries = function (id) {
  ReactDOM.unmountComponentAtNode(document.getElementById(id))
}
