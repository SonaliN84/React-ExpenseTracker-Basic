import ExpenseItems from "./ExpenseItem";
import {useState} from 'react'
function Expense(props){
  
  
    
return (
<div class="container my-4">
<div><h3>Expense History</h3></div>
<table class="table my-4 table-borderless">
  <thead class="thead-dark fs-5">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Title</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
 
      {/* <tr>
      <th scope="row">4</th>
      <td>{props.items[0].date}</td>
      <td>{props.items[0].title}</td>
      <td>{props.items[0].Amount}</td> */}
      {/* <td><button className="btn btn-danger" onClick={clickHandler}>Delete</button></td> */}
    {/* </tr> */}
      
    
      <ExpenseItems
        Date={props.items[0].date}
        title={props.items[0].title}
        Amount={props.items[0].Amount}
        
      />
     

      <ExpenseItems
        Date={props.items[1].date}
        title={props.items[1].title}
        Amount={props.items[1].Amount}
        
      />

      <ExpenseItems
        Date={props.items[2].date}
        title={props.items[2].title}
        Amount={props.items[2].Amount}
        
      />
      {/* <tr> */}
      {/* <td>{props.items[0].date}</td> */}
      {/* <td>{props.items[0].title}</td>
      <td>{props.items[0].Amount}</td> */}
     
    {/* </tr> */}

      
</tbody>
</table>
    </div>


)}
export default Expense;