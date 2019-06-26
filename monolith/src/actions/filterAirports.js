import { filterAirports } from '../redux/actions/airports.actions'

export default filters => dispatch => {
  dispatch(filterAirports(filters))
}
