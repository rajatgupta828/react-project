import react, { useState } from 'react';

import ExpenseItem from "./ExpenseItems";
import Card from '../UIHandler/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

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
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onFilterDates={filterDatesHandler} />
        {filteredArray.map(expense =>
          <ExpenseItem key= {expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
        )}
      </Card>
    </div>

  );
};

export default Expenses;