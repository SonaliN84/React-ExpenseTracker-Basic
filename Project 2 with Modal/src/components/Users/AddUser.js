import React,{useState} from 'react';
import './Adduser.css'
import ErrorModal from '../UI/ErrorModal/ErrorModal';
function AddUser(props){
    
    const [enteredUsername,setUsername]=useState('');
    const [enteredAge,setAge]=useState('');
    const [error,setError]=useState();

 
    function addUserHandler(event){
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
        {   setError({
            title:"Invalid Input",
            message:'Please enter valid name and age'
        })
            return;
        }
        if(+enteredAge <0)
        {  setError({
            title:"Invalid Age",
            message:'Please enter valid age(>0)'
        })
            return;
        }
        
      props.onUser(enteredUsername,enteredAge)

        setUsername('');
        setAge('');
        console.log(enteredAge)
        console.log(enteredUsername)


    }
    function usernameChangeHandler(event){
        setUsername(event.target.value)
    }
    function ageChangeHandler(event){
        setAge(event.target.value)
    }
    const errorHandler=()=>{
        setError(null)
    }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <div className='container'>
        <form className='shadow-lg p-3 mb-5 bg-body-tertiary rounded' onSubmit={addUserHandler}>
            <div className="form-group">
            <label htmlFor='username'>Enter Username</label>
            <input type="text" className="form-control" id="username" value={enteredUsername} onChange={usernameChangeHandler}/>
            </div>
            <div className="form-group">
            <label htmlFor="age">Enter age</label>
            <input type="text" className="form-control" id="age" value={enteredAge} onChange={ageChangeHandler}/>
             </div>
            
             <button id="button" type="submit" className="btn btn-block">Submit</button>
           
        </form>
        </div>
        
        </div>


  );

}
export default AddUser;