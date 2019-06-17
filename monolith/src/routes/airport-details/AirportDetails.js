import React, { useLayoutEffect } from 'react'

const AirportDetails = () => {

  useLayoutEffect(() => {
    document.title = 'Airport Details'
  }, [])
  
  return (
    <section className="screen screen--airports">
      <header className="screen-header">
        <h2>Airport Details</h2>
      </header>

      <aside className="screen-sidebar">
        <p>Airport Details sidebar</p>
      </aside>

      <div className="screen-content">
        <p>Airport Details content</p>
      </div>

      <footer className="screen-footer">
        <p>Airport Details footer</p>
      </footer>
    </section>
  )
}

AirportDetails.displayName = 'AirportDetails'

export default AirportDetails
