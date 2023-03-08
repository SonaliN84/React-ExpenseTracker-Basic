import FormExpense from "./FormExpense";
import react from 'react'
function NewExpense(props){
  function SaveExpenseDataHandler(enteredExpenseData){
    const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData)
  }



return (
   <div>
    <FormExpense onSaveExpenseData={SaveExpenseDataHandler}/>
   </div>

);

}
export default NewExpense;