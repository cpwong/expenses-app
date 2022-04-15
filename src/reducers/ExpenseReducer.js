import { v4 as uuid } from 'uuid'

export const ADD_EXPENSE = 'ADD_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE'

export const ExpenseReducer = (state, action) => {
  switch(action.type) {
    case ADD_EXPENSE:
      return [...state, {
        description: action.expense.description,
        category: action.expense.category,
        price: action.expense.price,
        id: uuid()
      }]
    
    case REMOVE_EXPENSE:
      return state.filter(item => item.id !== action.id)
    
    default:
      return state
  } 
}