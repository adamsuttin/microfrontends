import { combineReducers } from 'redux'

import countries from './countries.reducer'
import ui from './ui.reducer'

export default combineReducers({
  countries,
  ui
})
