import { useState } from 'react';
import './ExpenseDetails.css'
function ExpenseDetails(props){
const [Amount,setAmount]=useState(props.Amount)
function clickHandler(){
  setAmount("Rs.100")
}

  return (
    <div className="details">
  <div className="a">{props.title}</div>
  <div className="a">{Amount}
  <button className="buttont" onClick={clickHandler}>Change</button>
  </div>
  {/* <div className="a">{props.Location}</div> */}
  </div>
  );



}
export default ExpenseDetails;