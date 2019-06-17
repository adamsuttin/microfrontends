import React, { useState } from 'react'
import { navigateToUrl } from 'single-spa'

import './airport-listing.css'

export const AirportList = ({
  basename = '/airports',
  data = [],
  countryCode = '',
  heading = 'Origin Airports',
  ...rest
}) => {
  if (!data || data.length < 1 || !countryCode) return null
  return (
    <div {...rest}>
      <h4>{ heading }</h4>
      <ol>
      { data.map((a, i) => (
        <li key={ `airport-${i}` }>
          <a className="code"
            href={ `${basename}/${countryCode}/${a.codeIATA}` }
            onClick={ navigateToUrl }>{a.codeIATA}</a>
          <span className="name">{a.name}</span>
        </li>
      ))}
      </ol>
    </div>
  )
}

AirportList.displayName = 'AirportList'

const AirportListing = ({
  data = [],
  countryCode = ''
}) => {
  if (!data || data.length < 1) {
    return 'No data'
  }

  return (
    <section className="airport-listing">
      <AirportList
        className="airport-list"
        countryCode={ countryCode }
        data={ data.OriginAirports }
        heading="Origin Airports"
        key="origin" />
      <AirportList
        className="airport-list"
        countryCode={ countryCode }
        data={ data.DestinationAirports }
        heading="Destination Airports"
        key="destination" />
    </section>
  )
}

AirportListing.displayName = 'AirportListing'

export default AirportListing