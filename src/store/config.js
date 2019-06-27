import { combineReducers ,createStore } from 'redux'
import activeMenuReducer from './reducers/menuReducer'
import authReducer from './reducers/authReducer'
import formReducer from './reducers/formAreaReducer'
export default createStore(combineReducers({activeMenuItem:activeMenuReducer,user:authReducer,formAreaVisible:formReducer}))
