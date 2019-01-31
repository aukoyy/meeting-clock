import { NEW_SALARY, UPDATE_SALARYSUM } from './types';

export const addSalary = amount => ({
  type: NEW_SALARY,
  payload: amount,
})

export const updateSalarySum = (salarySum) => ({
  type: UPDATE_SALARYSUM,
  payload: salarySum,
})