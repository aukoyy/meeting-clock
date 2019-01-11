import { GET_SALARIES, NEW_SALARY } from './types';

import store from '../store';

export const getSalaries = () => ({
  type: GET_SALARIES,
  // payload: 'salaryArray'
  payload: store.getState().salaries.salaryArray,
  // WOHOOOOOOOOO!
})

// export const addSalary = amount => ({
//   type: 'ADD_SALARY',
//   id: nextSalarayId++,
//   payload: amount
// })