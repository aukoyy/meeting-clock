import { combineReducers } from 'redux'

import employeeReducer from './employeeReducer';
import timerReducer from './timerReducer';

import { TimerState } from './timerReducer';
import { EmployeeState } from './employeeReducer';

export interface AppState {
    employees: EmployeeState;
    timer: TimerState;
}

export default combineReducers<AppState>({
    employees: employeeReducer,
    timer: timerReducer,
});