
import './ExpenseItem.css'
function ExpenseItems(props){
   // const ExpenseDate="2023-2-28"
   // const ExpenseTitle="Car Insurance";
   // const ExpenseAmount="Rs 1000"
   
   return ( 
    <div className="container">
    <div className="box">
    
      <div>{props.Date}</div>
      <div>{props.title}</div>
      <div>{props.Amount}</div>
      <div>{props.Location}</div>

    </div>
    

    </div>
   
   );
}
export default ExpenseItems;