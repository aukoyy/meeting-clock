import { combineReducers } from 'redux'

import salayReducer from './salaryReducer';
import timerReducer from './timerReducer';

/* export interface AppState {
    salaries: SalaryState;
    timer: TimerState;
} */

// export default combineReducers<AppState>({
export default combineReducers({
    salaries: salayReducer,
    timer: timerReducer,
});