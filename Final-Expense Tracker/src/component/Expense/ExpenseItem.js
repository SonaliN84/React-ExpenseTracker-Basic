// import React, { useState } from "react";
// import ExpenseDetails from "./ExpenseDetails";
// import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate";
// import "./ExpenseItem.css";

function ExpenseItems(props) {
  // const ExpenseDate="2023-2-28"
  // const ExpenseTitle="Car Insurance";
  // const ExpenseAmount="Rs 1000"
  //  const month=props.Date.toLocaleString('en-US',{month:'long'})
  //  const day=props.Date.toLocaleString('en-US',{day:'2-digit'})
  //  const year=props.Date.getFullYear();

  // function clickHandler(event) {
  //   const del = event.target.parentElement;
  //   const parentElement = del.parentElement;
  //   parentElement.removeChild(del);
  // }
//  console.log("enter into function")
//   const [title,setTitle]=useState(props.title);
//   // const [Location,setLocation]=useState(props.Location)

  // const clickHandler=()=>{
  //   setTitle("Updated")
  //   // setLocation("abc")
  //   console.log(title)
  // }  

  return (
     
    
      
      
      // <button className="delbutton" onClick={clickHandler}>Click</button>
   
     
      <tr className="border shadow-sm p-3 mb-5 bg-body rounded">
      
      <td><ExpenseDate date={props.date} /></td>
      <td>{props.title}</td>
      <td>{props.amount}</td>
      {/* <td><button className="btn btn-danger" onClick={clickHandler}>Delete</button></td> */}
    </tr>
    
  );
}
export default ExpenseItems;
