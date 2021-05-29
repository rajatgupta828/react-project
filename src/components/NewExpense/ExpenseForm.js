import react, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // When we use multiple states

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    // Updating Single state

    /* const [enteredItems, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }); */

    const titleChangeHandler = (event) => {
        // Updating single state
        setEnteredTitle(event.target.value);

        //Updating all state together
        /* setUserInput((prevState) => {
           return  {...prevState,enteredTitle: event.target.value}
        }); */
    };

    const amountChangeHandler = (event) => {
        // updating Single State
        setenteredAmount(event.target.value);

        //Updating all state together
        /* setUserInput((prevState) => {
            return  {...prevState,enteredAmount: event.target.value}
         }); */
    };

    const dateChangeHandler = (event) => {
        // updating Single State
        setenteredDate(event.target.value);

        //Updating all state together
        /* setUserInput((prevState) => {
            return  {...prevState,enteredAmount: event.target.value}
         }); */
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setenteredDate('');
        setEnteredTitle('');
        setenteredAmount('');
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="1" step="1" onChange={amountChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" value={enteredDate} max="2021-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__action">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;

