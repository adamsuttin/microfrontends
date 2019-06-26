import React from 'react'

const NoRouteMatch = () => (
  <section className="screen screen--404">
    <header>
      <h4>Not Found</h4>
    </header>
    <div>
      <p>We could not find any screen that matches your selection.</p>
    </div>
  </section>
)

NoRouteMatch.displayName = 'NoRouteMatch'

export default NoRouteMatch
