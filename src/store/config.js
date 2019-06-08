import { combineReducers ,createStore } from 'redux'
import activeMenuReducer from './reducers/menuReducer'
import authReducer from './reducers/authReducer'
export default createStore(combineReducers({activeMenuItem:activeMenuReducer,user:authReducer}))