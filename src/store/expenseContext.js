import { createContext, useReducer } from 'react'
import { v4 as uuid } from 'uuid'

import { ExpenseReducer } from '../reducers/ExpenseReducer';

// Create context object
export const ExpenseContext = createContext();

function ExpenseContextProvider({ children }) {
  
  // Initialise default state
  
  // Change useReducer --> useState
  // Change setExpense --> dispatch
  // Add ExpenseReducer
  const [expenses, dispatch] = useReducer(ExpenseReducer, [
    {id: 1, description: 'Banana', category: 'Food', price: '2.99' },
    {id: 2, description: 'Eggs', category: 'Food', price: '5.80' },
    {id: 3, description: 'Cake', category: 'Food', price: '13.50' },
    {id: 4, description: 'Tissue Paper', category: 'Household', price: '6.40' },
    {id: 5, description: 'Washing Powder', category: 'Household', price: '10.50' },
  ]) 

  // Return context wrapped around children components
  // Values props include context state and handler functions (const)

  // Change individual methods --> dispatch
  return (
    <ExpenseContext.Provider value={{expenses, dispatch}}>
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseContextProvider