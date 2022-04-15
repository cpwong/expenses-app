import { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

// Create context object
export const ExpenseContext = createContext();

function ExpenseContextProvider({ children }) {
  
  // Initialise default state
  const [expenses, setExpenses] = useState([
    {id: 1, description: 'Banana', category: 'Food', price: '2.99' },
    {id: 2, description: 'Eggs', category: 'Food', price: '5.80' },
    {id: 3, description: 'Cake', category: 'Food', price: '13.50' },
    {id: 4, description: 'Tissue Paper', category: 'Household', price: '6.40' },
    {id: 5, description: 'Washing Powder', category: 'Household', price: '10.50' },
  ]) 
  const addExpense = (description, category, price) => {
    setExpenses([...expenses, {
      description, category, price, id: uuid()
    }])
  }
  const removeExpense = (id) => {
    setExpenses(expenses.filter(item => item.id !== id))  
  }

  // Return context wrapped around children components
  // Values props include context state and handler functions (const)
  return (
    <ExpenseContext.Provider value={{expenses, addExpense, removeExpense}}>
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseContextProvider