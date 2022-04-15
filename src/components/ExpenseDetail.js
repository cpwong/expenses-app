import { useContext } from 'react'
import { REMOVE_EXPENSE } from '../reducers/ExpenseReducer'
import { ExpenseContext } from '../store/ExpenseContext'

function ExpenseDetail({ expense }) {
  const { dispatch } =useContext(ExpenseContext)
  return (
    // <tr onClick={() => removeExpense(expense.id)}>
    <tr onClick={() => dispatch({ type: REMOVE_EXPENSE, id: expense.id })}>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>{expense.price}</td>
    </tr>
  )
}

export default ExpenseDetail