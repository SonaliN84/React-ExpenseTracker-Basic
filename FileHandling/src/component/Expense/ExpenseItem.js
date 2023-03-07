import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card.js'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
function ExpenseItems(props){
   // const ExpenseDate="2023-2-28"
   // const ExpenseTitle="Car Insurance";
   // const ExpenseAmount="Rs 1000"
  //  const month=props.Date.toLocaleString('en-US',{month:'long'})
  //  const day=props.Date.toLocaleString('en-US',{day:'2-digit'})
  //  const year=props.Date.getFullYear();

   return ( 
    
    <Card className="box">
    
      {/* <div>{props.Date.toISOString()}</div> */}
      {/* <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div> */}
      
      <ExpenseDate Date={props.Date}></ExpenseDate>
      {/* <div>{props.title}</div>
      <div>{props.Amount}</div>
      <div>{props.Location}</div> */}
      <ExpenseDetails title={props.title} Amount={props.Amount} Location={props.Location}></ExpenseDetails>
    </Card>
    

    
   
   );
}
export default ExpenseItems;