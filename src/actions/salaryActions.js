import { NEW_SALARY, SET_SALARYSUM } from './types';

export const addSalary = amount => ({
  type: NEW_SALARY,
  payload: amount,
})

export const setSalarySum = (salarySum) => ({
  type: SET_SALARYSUM,
  payload: salarySum,
})