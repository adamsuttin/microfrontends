import {
  FETCH_AIRPORTS_INIT,
  FETCH_AIRPORTS_SUCCESS,
  FETCH_AIRPORTS_FAILURE,
  FILTER_AIRPORTS
} from '../types'

const initialState = {
  error: '',
  results: {},
  status: 'idle'
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_AIRPORTS_INIT:
      return {
        ...state,
        error: '',
        results: {},
        status: 'pending'
      }
    case FETCH_AIRPORTS_SUCCESS:
      return {
        ...state,
        error: '',
        results: action.payload,
        status: 'ready'
      }
    case FETCH_AIRPORTS_FAILURE:
      return {
        ...state,
        error: action.error,
        status: 'failed'
      }
    default:
      return state
  }
}
