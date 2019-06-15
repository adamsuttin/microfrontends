import {
  FETCH_CITIES_INIT,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  FILTER_CITIES
} from '../types'

export const fetchCitiesInit = countryCode => ({
  countryCode,
  type: FETCH_CITIES_INIT
})

export const fetchCitiesSuccess = payload => ({
  payload,
  type: FETCH_CITIES_SUCCESS
})

export const fetchCitiesFailure = error => ({
  error,
  type: FETCH_CITIES_FAILURE
})

export const filterCities = filters => ({
  filters,
  type: FILTER_CITIES
})
