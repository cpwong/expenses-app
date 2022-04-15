import { useContext, useState } from 'react'
import { ExpenseContext } from '../store/ExpenseContext'
import { ADD_EXPENSE } from '../reducers/ExpenseReducer'

function NewExpenseForm() {
  
  // Change addExpense --> dispatch
  const { dispatch } = useContext(ExpenseContext)
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    
    //addExpense(description, category, price)
    dispatch({
      type: ADD_EXPENSE,
      expense: {
        description,
        category,
        price
      }
    })
    setDescription('')
    setCategory('')
    setPrice('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' 
        placeholder='Expense description' 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input type='text' 
        placeholder='Expense category' 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input type='text' 
        placeholder='Price' 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input type='submit' value='Add Expense' />
    </form>
  )
}

export default NewExpenseForm
