import {CreateStore} from 'redux';
import rootReducer from '../reducers/index'
const store = CreateStore(rootReducer)

export default store;