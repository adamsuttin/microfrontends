import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

window.renderDashboard = function (id, history) {
  console.log('ReactDOM is about to render Dashboard at: ', id)
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(id),
  )
}

window.unmountDashboard = function (id) {
  ReactDOM.unmountComponentAtNode(document.getElementById(id))
}
