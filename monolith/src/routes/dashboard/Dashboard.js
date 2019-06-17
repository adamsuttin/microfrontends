import React, { useLayoutEffect } from 'react'
import { withRouter } from 'react-router-dom'

const Dashboard = () => {
  useLayoutEffect(() => {
    document.title = 'Dashboard'
  })
  return (
    <section className="screen screen--dashboard">
      <header className="screen-header">
        <h2>Dashboard</h2>
      </header>

      <aside className="screen-sidebar">
        <p>Dashboard sidebar</p>
      </aside>

      <footer className="screen-footer">
        <p>Dashboard footer</p>
      </footer>
    </section>
  )
}

Dashboard.displayName = 'Dashboard'

export default withRouter(Dashboard)
