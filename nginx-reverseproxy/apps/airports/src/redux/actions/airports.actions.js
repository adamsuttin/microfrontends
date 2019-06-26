import {
  FETCH_AIRPORTS_INIT,
  FETCH_AIRPORTS_SUCCESS,
  FETCH_AIRPORTS_FAILURE
} from '../types'

export const fetchAirportsInit = countryCode => ({
  countryCode,
  type: FETCH_AIRPORTS_INIT
})

export const fetchAirportsSuccess = payload => ({
  payload,
  type: FETCH_AIRPORTS_SUCCESS
})

export const fetchAirportsFailure = error => ({
  error,
  type: FETCH_AIRPORTS_FAILURE
})
