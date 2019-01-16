import { GET_SALARIES, NEW_SALARY, SET_SALARYSUM, GET_SALARYSUM } from './types';

import store from '../store';

export const getSalaries = () => ({
  type: GET_SALARIES,
  payload: store.getState().salaries.salaryArray,
  // WOHOOOOOOOOO!
})

export const addSalary = amount => ({
  type: NEW_SALARY,
  payload: amount,
})

export const setSalarySum = (salarySum) => ({
  type: SET_SALARYSUM,
  payload: salarySum,
})

export const getSalarySum = () => ({
  type: GET_SALARYSUM,
  payload: store.getState().salaries.salarySum,
})