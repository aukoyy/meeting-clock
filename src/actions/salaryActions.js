import { GET_SALARIES, NEW_SALARY, SET_SALARYSUM, TOGGLE_TIMER } from './types';

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

export const setSalarySum = () => ({
  type: SET_SALARYSUM,
  payload: store.getState().salaries.SalaryArray.reduce((sum, salary) => sum + salary),
})

export const toggleTimer = () => ({
  type: TOGGLE_TIMER,
  payload: !store.getState().timerShouldRun,
})