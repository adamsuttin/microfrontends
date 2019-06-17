export function createReducer(state, handlers) {
  return function reducer(state, action) {
    return handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state
  }
}
