import FormExpense from "./FormExpense";
import './NewExpense.css'
import react,{useState} from 'react'
function NewExpense(props){

const [isEditing,setIsEditing]=useState(false);



  function SaveExpenseDataHandler(enteredExpenseData){
    const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const startEditingHandler=()=>{
    setIsEditing(true);
  }

  const stopEditingHandler=()=>{
    setIsEditing(false);
  }
 

return (
  <div>
   {!isEditing && <div className="container d-flex justify-content-center border rounded shadow p-3 mb-5 bg-body rounded my-5">
 <button className="btn btn-primary my-5 btn-lg" onClick={startEditingHandler}>Add Expense</button>
  </div>}
  {isEditing && <FormExpense onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/>}

    


   
</div>
);

}
export default NewExpense;