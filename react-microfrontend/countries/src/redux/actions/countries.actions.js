import {
  FETCH_COUNTRIES_INIT,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE
} from '../types'

export const fetchCountriesInit = () => ({
  type: FETCH_COUNTRIES_INIT
})

export const fetchCountriesSuccess = payload => ({
  payload,
  type: FETCH_COUNTRIES_SUCCESS
})

export const fetchCountriesFailure = error => ({
  error,
  type: FETCH_COUNTRIES_FAILURE
})
