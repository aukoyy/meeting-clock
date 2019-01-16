import { GET_SALARIES, NEW_SALARY, SET_SALARYSUM, GET_SALARYSUM } from '../actions/types';

const initialState = {
    salaryArray: [200, 220],
    salarySum: 0,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SALARIES:
            return {
                ...state,
                salaryArray: action.payload,
            }
        case NEW_SALARY:
            return {
                ...state,
                salaryArray: action.payload,
            }
        case GET_SALARYSUM:
            return {
                ...state,
                salarySum: action.payload,
            }
        case SET_SALARYSUM:
            return {
                ...state,
                salarySum: action.payload,
            }
        default:
            return state;
    }
}
