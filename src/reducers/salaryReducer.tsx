import { NEW_SALARY, UPDATE_SALARYSUM } from '../actions/types';

export interface SalaryState {
    salaryArray: number[],
    salarySum: number,
}

const initialState: SalaryState = {
    salaryArray: [],
    salarySum: 0,
}

export default function(state: SalaryState = initialState, action: any) {
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
