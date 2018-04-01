import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import users from './users'
import navMenu from './navMenu'


export default combineReducers({
  routing: routerReducer,
  users,
  navMenu
})