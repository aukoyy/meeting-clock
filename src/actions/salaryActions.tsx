import { NEW_SALARY, UPDATE_SALARYSUM } from './types';

export const addSalary = (amount: number) => ({
  type: NEW_SALARY,
  payload: amount,
})

export const updateSalarySum = (salarySum: number) => ({
  type: UPDATE_SALARYSUM,
  payload: salarySum,
})