import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk), //now redux has the ability to understand functions instead of actions
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? devToolsExtension() : (f) => f
))

export default store
