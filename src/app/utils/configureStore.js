import 'regenerator-runtime/runtime'
import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootSaga from 'sagas'
import rootReducer from 'reducers'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()
const middleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (initialState = {}) => {
	const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(
      applyMiddleware(middleware, sagaMiddleware)
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}