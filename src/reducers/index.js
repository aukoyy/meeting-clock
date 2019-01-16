import { combineReducers } from 'redux'

import salayReducer from './salaryReducer';
import timerReducer from './timerReducer';

export default combineReducers({
    salaries: salayReducer,
    timer: timerReducer,
});