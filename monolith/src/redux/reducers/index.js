import { combineReducers } from 'redux'

import airports from './airports.reducer'
import countries from './countries.reducer'
import ui from './ui.reducer'

export default combineReducers({
  airports,
  countries,
  ui
})
