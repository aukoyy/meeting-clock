import { ADD_EMPLOYEE, UPDATE_SALARYSUM } from '../actions/types';

export interface Employee {
    id: number;
    name: string;
    salary: number
}

export interface EmployeeState {
    employees: Employee[],
    salarySum: number,
}

const initialState: EmployeeState = {
    employees: [],
    salarySum: 0,
}


// TODO: implement action types
export default function(state: EmployeeState = initialState, action: any) {
    switch(action.type) {
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: action.payload,
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
