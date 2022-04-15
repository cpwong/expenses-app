import { useContext } from 'react'
import { ExpenseContext } from '../store/expenseContext'

function NavBar() {
  
  const { expenses } = useContext(ExpenseContext)
  return (
    <div className='navbar'>
      <h1>Expense List</h1>
      <p>Currently you have {expenses.length} items in the list.</p>
    </div>
  )
}

export default NavBar