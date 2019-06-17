import React, { useEffect, useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AirportListing from '../../components/AirportListing'

import fetchAirports from '../../actions/fetchAirports'

import {
  getError,
  getResults,
  getStatus
} from '../../redux/selectors/airports.selectors'

import './airports.css'

const Airports = ({
  error = '',
  fetchAirports,
  history = {},
  location = {},
  match = {},
  results = [],
  status = 'idle'
}) => {
  const countryCode = match.params.countryCode || 'us'

  useEffect(() => {
    fetchAirports(countryCode)
  }, [countryCode])

  useLayoutEffect(() => {
    document.title = 'Airports'
  }, [])

  return (
    <section className="screen screen--airports">
      <header className="screen-header">
        <h2>Airports</h2>
      </header>

      <aside className="screen-sidebar">
        <p>Screen sidebar</p>
      </aside>

      <div className="screen-content">
        {status === 'error' && <p key="status-error">Error: {error}</p>}
        {status === 'pending' && <p key="status-fetching">Fetching data...</p>}
        {status === 'ready' && [
          <AirportListing
            data={results}
            countryCode={ countryCode }
            key="status-ready" />
        ]}
      </div>

      <footer className="screen-footer">
        <p>Screen footer</p>
      </footer>
    </section>
  )
}

const mapStateToProps = (state, props) => ({
  error: getError(state),
  results: getResults(state),
  status: getStatus(state)
})

const mapDispatchToProps = {
  fetchAirports
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Airports)
)
