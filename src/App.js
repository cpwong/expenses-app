import ExpenseList from './components/ExpenseList';
import NavBar from './components/NavBar';
import NewExpenseForm from './components/NewExpenseForm';
import ExpenseContextProvider from './store/ExpenseContext';

function App() {
  return (
    <div className="App">
      <ExpenseContextProvider>
        <NavBar />
        <ExpenseList />
        <NewExpenseForm />
      </ExpenseContextProvider>
    </div>
  );
}

export default App;
