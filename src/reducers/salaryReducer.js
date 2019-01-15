import { GET_SALARIES, NEW_SALARY, SET_SALARYSUM } from '../actions/types';

const initialState = {
    salaryArray: [200, 300, 150, 180],
    salarySum: 0,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SALARIES:
            return {
                ...state,
                salaryArray: action.payload
            }
        case NEW_SALARY:
            return [
                action.NEW_SALARY,
                ...state.salaryArray.push(action.payload)
            ]
        case SET_SALARYSUM:
            return {
                ...state,
                salarySum: 400,
            }
        default:
            return state;
    }
}
