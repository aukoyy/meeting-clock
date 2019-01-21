import { NEW_SALARY, UPDATE_SALARYSUM } from '../actions/types';

const initialState = {
    salaryArray: [200, 220],
    salarySum: 0,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case NEW_SALARY:
            return {
                ...state,
                salaryArray: action.payload,
            }
        case UPDATE_SALARYSUM:
            return {
                ...state,
                salarySum: action.payload,
            }
        default:
            return state;
    }
}
