import { createStore } from 'redux'
import activeMenuReducer from './reducers/menuReducer'
export default createStore(activeMenuReducer)