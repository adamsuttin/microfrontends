import React, { useLayoutEffect } from 'react'

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

export default Dashboard
