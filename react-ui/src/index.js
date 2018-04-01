import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import reducers from './app/reducers'
import Layout from './app/containers/layout'
import Dashboard from './app/containers/dashboard'
import NotFound from './app/containers/notFound'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path='/' component={Dashboard}/>
      </Route>
        <Route path='*' component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
