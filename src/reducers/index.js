import { combineReducers } from 'redux'

import salayReducer from './salaryReducer';

export default combineReducers({
    salaries: salayReducer
});