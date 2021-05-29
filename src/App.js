import react from 'react';
import Expenses from './components/ExpenseHandler/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  console.log("Explaining the PROPS We are going to  create the array of expense and passing it on");

  const expenses = [
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


  return (

    <div className="App">
      <header className="App-header">
        <NewExpense />
        <Expenses items={expenses}/>
      </header>
    </div>
  );
}

export default App;
