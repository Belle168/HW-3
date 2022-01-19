import { useState } from "react";
import './SecondForm.css';


const SecondForm = () =>{
    const [userInput, setUserInput] = useState({
        title: '',
        amount:'',
        date:'',
    });


const inputChangeHandler = (event) =>{
    const currentInput = event.target.name;
    setUserInput((prevState) =>{
        return {
            ...prevState,
        [currentInput]: event.target.value,
        }
    });
};



const submitHandler = (event) =>{
    event.preventDefault();
    console.log(userInput);
}


    return (
        <form onSubmit={submitHandler}>
        
        <div className='second_form'>
            
           <label>Title</label>
            <input type="text" name="title" onChange={inputChangeHandler}/>
            
            <label>Amount</label>
            <input type="number" name="amount"  onChange={inputChangeHandler}/>
            
            <label>Date</label>
            <input type="date" name="date" min="2022-01-01" onChange={inputChangeHandler}/>
            
            <button className="second_button" type='submit'>Add Expense</button>
        </div>
        
           
        
    </form>
    )

    }

    export default SecondForm;