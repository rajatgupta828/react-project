import react, {useState} from 'react';

import ExpenseItem from "./ExpenseItems";
import Card from '../UIHandler/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [filteredYear, setfilteredYear] = useState('2020');

  const filterDatesHandler = (selectedYear) => {
    console.log('In Expenses.jS');
    setfilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onFilterDates={filterDatesHandler} />
        <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount} />
        <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount} />
        <ExpenseItem title={props.items[2].title} date={props.items[2].date} amount={props.items[2].amount} />
        <ExpenseItem title={props.items[3].title} date={props.items[3].date} amount={props.items[3].amount} />
      </Card>
    </div>

  );
};

export default Expenses;