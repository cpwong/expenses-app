import { useContext } from 'react'
import { ExpenseContext } from '../store/ExpenseContext'
import ExpenseDetail from './ExpenseDetail'

function ExpenseList() {
  const { expenses } = useContext(ExpenseContext)
  return expenses.length ? (
    <table className='expense-list'>
      <tbody>
        { expenses.map(expense => {
          return (<ExpenseDetail expense={expense} key={expense.id} />)
        })}
      </tbody>
    </table>
  ) : (
    <div className='empty'>Expense list is empty!</div>
  )
    
}

export default ExpenseList