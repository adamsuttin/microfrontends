import React from 'react'
import { Link } from 'react-router-dom'

import './country-listing.css'

export const CountryList = ({
  basename = '/countries',
  data = [],
  countryCode = '',
  heading = 'Origin Countries',
  ...rest
}) => {
  if (!data || data.length < 1) return null
  return (
    <div {...rest}>
      <h4>{ heading }</h4>
      {!data || data.length < 1 ? (
        <p>No data</p>
      ) : (
        <ol>
          {data.map(c => (
            <li key={`city-${c.code}`}>
              <Link className="code" to={`${basename}/${c.code}`}>
                {c.code}
              </Link>
              <span className="name">{c.name}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

const CountryListing = ({
  data = {
    OriginCountries: [],
    DestinationCountries: []
  }
}) => {
  if (!data) {
    return 'No data'
  }

  return (
    <section className="country-listing">
      <CountryList
        basename=""
        className="country-list"
        data={ data.OriginCountries }
        heading="Origin Countries"
        key="origin" />
      <CountryList
        basename=""
        className="country-list"
        data={ data.DestinationCountries }
        heading="Destination Countries"
        key="destination" />
    </section>
  )
}

export default CountryListing