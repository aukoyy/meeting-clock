let nextSalarayId = 0
export const addSalary = amount => ({
  type: 'ADD_SALARY',
  id: nextSalarayId++,
  text: amount
})