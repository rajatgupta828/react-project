import react, {useState} from 'react';

import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UIHandler/Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const titleClickHandler = () => {
        setTitle('Updated Title');
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={titleClickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;