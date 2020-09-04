import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './auth/AuthContext'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import saga from './store/sagas/'
import blogReducer from './store/reducers/blog'

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({
  blog: blogReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(saga)

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store = { store }>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);