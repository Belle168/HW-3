import { useState } from "react";
import './ThirdForm.css';


const ThirdForm = () =>{
    const [userInput, setUserInput] = useState({
        title: '',
        amount:'',
        date:'',
    });


const titleChangeHandler = (event) =>{
    setUserInput((prevState) =>{
        return {
           ...prevState,
           title: event.target.value, 
        }
    });
};

const amountChangeHandler = (event) =>{
    setUserInput((prevState) =>{
        return {
            ...prevState,
        amount: event.target.value
        }
    });
};


const dateChangeHandler = (event) =>{
    setUserInput((prevState) =>{
        return {
            ...prevState,
            date: event.target.value
        }
    });
};


const submitHandler = (event) =>{
    event.preventDefault();
    console.log(userInput);
}

   return (
        <form onSubmit={submitHandler}>
        
        <div className='third_form'>
            
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler}/>
            
             <label>Amount</label>
             <input type="number"   onChange={amountChangeHandler}/>
            
             <label>Date</label>
             <input type="date" min="2022-01-01" onChange={dateChangeHandler}/>
            
             <button className="third_button" type='submit'>Add Expense</button>
        </div>
        
        
        
    </form>
    )

    }

    export default ThirdForm;