import { ADD_EMPLOYEE, UPDATE_SALARYSUM } from './types';
import { Employee } from '../reducers/employeeReducer';

export const addEmployee = (employee: Employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
})

export const updateSalarySum = (salarySum: number) => ({
  type: UPDATE_SALARYSUM,
  payload: salarySum,
})