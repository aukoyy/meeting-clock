import { GET_SALARIES, NEW_SALARY } from './types';


export const getSalaries = () => ({
  type: GET_SALARIES
})

// export const addSalary = amount => ({
//   type: 'ADD_SALARY',
//   id: nextSalarayId++,
//   payload: amount
// })