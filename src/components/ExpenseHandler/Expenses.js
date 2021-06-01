import react, { useState } from 'react';

import ExpenseItem from "./ExpenseItems";
import Card from '../UIHandler/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [filteredYear, setfilteredYear] = useState('2020');

  const filterDatesHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredArray = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <li>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onFilterDates={filterDatesHandler} />
        <ExpensesChart expenses={filteredArray}/>
        <ExpensesList items={filteredArray} />
      </Card>
      </li>  
    </div>
  );
};

export default Expenses;