import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

let middlewares = [thunk]
let middleware = applyMiddleware(...middlewares)

if (
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  middleware = compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export default createStore(reducers, middleware)
