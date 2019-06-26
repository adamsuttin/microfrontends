import {
  fetchAirportsInit,
  fetchAirportsSuccess,
  fetchAirportsFailure
} from '../redux/actions/airports.actions'

import { API_AIRPORTS_URL } from '../config'

const bearer = `Bearer ${localStorage.getItem('apiToken')}`

export default countryCode => dispatch => {
  const _countryCode = countryCode ? countryCode : 'us'
  dispatch(fetchAirportsInit(_countryCode))
  return fetch(`${API_AIRPORTS_URL}/${_countryCode}`)
    .then(
      response => response.json(),
      error => dispatch(fetchAirportsFailure(error))
    )
    .then(payload => dispatch(fetchAirportsSuccess(payload)))
}
