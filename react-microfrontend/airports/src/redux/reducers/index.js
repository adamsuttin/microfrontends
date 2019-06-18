import { combineReducers } from 'redux'

import airports from './airports.reducer'
import ui from './ui.reducer'

export default combineReducers({
  airports,
  ui
})
