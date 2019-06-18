export const getStatus = state => state.countries.status
export const getError = state => state.countries.error
export const getResults = state => state.countries.results

export const getOriginCountry = (state, code) =>
  state.countries.results.originCountries.find(c => c.countryCode === code) ||
  {}

export const getDestinationCountry = (state, code) =>
  state.countries.results.destinationCountries.find(
    c => c.countryCode === code
  ) || {}

export const getCountry = (state, code, listing = 'origin') => {
  switch (listing) {
    case 'destination':
      return getDestinationCountry(state, code)
    case 'origin':
    default:
      return getOriginCountry(state, code)
  }
}
