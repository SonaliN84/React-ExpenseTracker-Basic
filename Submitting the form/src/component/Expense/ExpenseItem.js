import React, { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
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
 console.log("enter into function")
  const [title,setTitle]=useState(props.title);
  // const [Location,setLocation]=useState(props.Location)

  const clickHandler=()=>{
    setTitle("Updated")
    // setLocation("abc")
    console.log(title)
  }  

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
      <ExpenseDetails
        title={title}
        Amount={props.Amount}
        // Location={Location}
      ></ExpenseDetails>
      {/* <button className="delbutton" onClick={clickHandler}> */}
        {/* Delete
      </button> */}
      <button className="delbutton" onClick={clickHandler}>Click</button>
    </Card>
  );
}
export default ExpenseItems;
