import ExpenseItems from "./component/ExpenseItem";
import "./App.css";

function App() {
  const expenses = [
    {
      date: "22-02-2023",
      title: "Car Insurance",
      Amount: "Rs 1000",
      Location: "Maharashtra",
    },
    {
      date: "19-03-2023",
      title: "Birthday",
      Amount: "Rs 2000",
      Location: "Maharashtra",
    },
    {
      date: "23-03-2023",
      title: "Shopping",
      Amount: "Rs 700",
      Location: "Maharashtra",
    },
  ];
  return (
    <div>
      <h1 id="h1">Let's get started</h1>
      
     
        <ExpenseItems Date={expenses[0].date} title={expenses[0].title} Amount={expenses[0].Amount} Location={expenses[0].Location} ></ExpenseItems>
        
        <ExpenseItems Date={expenses[1].date} title={expenses[1].title} Amount={expenses[1].Amount} Location={expenses[1].Location} ></ExpenseItems>
        
        <ExpenseItems Date={expenses[2].date} title={expenses[2].title} Amount={expenses[2].Amount} Location={expenses[2].Location} ></ExpenseItems>
      
     
    </div>
  );
}

export default App;
