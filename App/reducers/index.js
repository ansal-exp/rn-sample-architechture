import { combineReducers } from 'redux'
import * as loginReducer from './loginReducer'
import * as phonesReducer from './phonesReducer'
export default combineReducers(Object.assign(loginReducer,phonesReducer))
