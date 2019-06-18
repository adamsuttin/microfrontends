import {
  fetchCountriesInit,
  fetchCountriesSuccess,
  fetchCountriesFailure
} from '../redux/actions/countries.actions'

import { API_COUNTRIES_URL } from '../config'

export default () => dispatch => {
  dispatch(fetchCountriesInit())
  return fetch(`${API_COUNTRIES_URL}`)
    .then(
      response => response.json(),
      error => dispatch(fetchCountriesFailure(error))
    )
    .then(payload => dispatch(fetchCountriesSuccess(payload)))
}
