import {
  FETCH_COUNTRIES_INIT,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE
} from '../types'

const initialState = {
  error: '',
  results: {
    OriginCountries: [],
    DestinationCountries: []
  },
  status: 'idle'
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COUNTRIES_INIT:
      return {
        ...initialState,
        status: 'pending'
      }
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        error: '',
        results: action.payload,
        status: 'ready'
      }
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        error: action.error,
        status: 'failed'
      }
    default:
      return state
  }
}
