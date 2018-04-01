import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import navMenu from './navMenu'
import tweets from './tweets'

export default combineReducers({
  routing: routerReducer,
  navMenu,
  tweets
})