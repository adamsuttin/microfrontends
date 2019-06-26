import React, { useLayoutEffect } from 'react'

import './country-details.css'

const CountryDetails = () => {
  useLayoutEffect(() => {
    document.title = 'Country Details'
  }, [])

  return (
    <section className="screen screen--country-detail">
      <header className="screen-header">
        <h2>Country Detail</h2>
      </header>

      <aside className="screen-sidebar">
        <p>Country Details sidebar</p>
      </aside>

      <div className="screen-content">
        <p>Country Details content</p>
      </div>

      <footer className="screen-footer">
        <p>Country Details footer</p>
      </footer>
    </section>
  )
}

CountryDetails.displayName = 'CountryDetails'

export default CountryDetails
