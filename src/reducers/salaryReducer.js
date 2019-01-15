import { GET_SALARIES, NEW_SALARY, SET_SALARYSUM, TOGGLE_TIMER } from '../actions/types';

const initialState = {
    salaryArray: [200, 220],
    salarySum: 0,
    timerShouldRun: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SALARIES:
            return {
                ...state,
                salaryArray: action.payload
            }
        case NEW_SALARY:
            return {
                ...state,
                salaryArray: action.payload
            }
        case SET_SALARYSUM:
            return {
                ...state,
                salarySum: action.payload,
            }
        case TOGGLE_TIMER:
            return {
                ...state,
                timerShouldRun: action.payload
            }
        default:
            return state;
    }
}
