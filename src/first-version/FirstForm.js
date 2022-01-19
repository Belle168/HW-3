import { useState } from 'react'
import './FirstForm.css'


const ExpenseForm = () => {
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate]  = useState('');
    
    const titleChangeHandler = (event) =>{
      setTitle(event.target.value)
    }
     
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) =>{
        setDate(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        console.log(title)
        console.log(amount)
        console.log(date)
    }

    return <form onSubmit={submitHandler}>
        
        <div className='first_form'>
            
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler}/>
           
            <label>Amount</label>
            <input type="number"   onChange={amountChangeHandler}/>
            
            <label>Date</label>
            <input type="date" min="2022-01-01" onChange={dateChangeHandler}/>
            <button className='first_button' type='submit'>Add Expense</button>
        </div>
    
    </form>
}

export default ExpenseForm;
    
    