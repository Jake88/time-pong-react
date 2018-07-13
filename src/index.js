import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import { Provider } from 'react-redux'
import configureStore, { history } from './app/utils/configureStore'
import registerServiceWorker from './registerServiceWorker'
import { ConnectedRouter } from 'connected-react-router'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker()
