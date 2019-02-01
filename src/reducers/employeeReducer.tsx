import { NEW_SALARY, UPDATE_SALARYSUM } from '../actions/types';
import { number } from 'prop-types';

export interface Employee {
    id: number;
    name: string;
    salary: number
}

export interface EmployeeState {
    employeeArray: Array<Employee>,
    salarySum: number,
}

const initialState: EmployeeState = {
    employeeArray: [{id: 0, name: 'Carl', salary: -1}],
    salarySum: 0,
}

export default function(state: EmployeeState = initialState, action: any) {
    switch(action.type) {
        case NEW_SALARY:
            return {
                ...state,
                employeeArray: action.payload,
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
