import changeTheNumber from './upDown';
import muldivTheNumber from './muldiv'

import { combineReducers } from 'redux';
const rootReducer=combineReducers({
    changeTheNumber,muldivTheNumber
})
export default rootReducer;