import React, { useEffect, useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CountryListing from '../../components/country-listing/CountryListing'

import fetchCountries from '../../actions/fetchCountries'

import {
  getError,
  getResults,
  getStatus
} from '../../redux/selectors/countries.selectors'

import './countries.css'

const Countries = ({
  error = '',
  fetchCountries,
  history = {},
  location = {},
  match = {},
  results = [],
  status = 'idle'
}) => {
  useEffect(() => {
    fetchCountries()
  }, [])

  useLayoutEffect(() => {
    document.title = 'Countries'
  }, [])

  return (
    <section className="screen screen--countries">
      <header className="screen-header">
        <h2>Countries</h2>
      </header>

      <div className="screen-content">
        {status === 'error' && <p>Error: {error}</p>}
        {status === 'pending' && <p>Fetching countries...</p>}
        {status === 'ready' && <CountryListing data={results} />}
      </div>

      <aside className="screen-sidebar">
        <p>Countries sidebar</p>
      </aside>

      <footer className="screen-footer">
        <p>Countries footer</p>
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
  fetchCountries
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Countries)
)
