import react from 'react';
import ExpenseItem from './ExpenseItems';
import './ExpensesList.css'

const ExpensesList = (props) => {

    let expensesContent = <p className="para-in-card">  There are no expenses to current year </p>;

    if(props.items.length === 0){
        return(expensesContent)
    }

    return (
        <div>
            <ul className="expenses-list">
                {props.items.map(expense =>
                    <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
                )}
            </ul>
        </div>);
};


export default ExpensesList;

