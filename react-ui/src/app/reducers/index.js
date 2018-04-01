import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import navMenu from './navMenu'

export default combineReducers({
  routing: routerReducer,
  navMenu
})