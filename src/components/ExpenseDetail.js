import { useContext } from 'react'
import { ExpenseContext } from '../store/expenseContext'

function ExpenseDetail({ expense }) {
  const { removeExpense } =useContext(ExpenseContext)
  return (
    <tr onClick={() => removeExpense(expense.id)}>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>{expense.price}</td>
    </tr>
  )
}

export default ExpenseDetail