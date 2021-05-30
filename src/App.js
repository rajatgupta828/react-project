import react, { useState } from 'react';
import Expenses from './components/ExpenseHandler/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 300,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 14662,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 5000,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
        return [expense, ...expenses]
    });
    console.log(expenses);
  };


  return (

    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;
