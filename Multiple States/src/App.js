import ExpenseItems from "./component/Expense/ExpenseItem";
import "./App.css";
import FormExpense from "./component/FormExpense/FormExpense";

function App() {
  const expenses = [
    {
      date: new Date(2021, 2, 22),
      title: "Car Insurance",
      Amount: "Rs 1000",
      Location: "Online",
    },
    {
      date: new Date(2022, 7, 12),
      title: "Birthday",
      Amount: "Rs 2000",
      Location: "Hotel",
    },
    {
      date: new Date(2023, 2, 17),
      title: "Shopping",
      Amount: "Rs 700",
      Location: "Mall",
    },
  ];
  return (
    <div>
      <h1 id="h1">Let's get started</h1>
      
      <div className="container1">
      <ExpenseItems
        Date={expenses[0].date}
        title={expenses[0].title}
        Amount={expenses[0].Amount}
        Location={expenses[0].Location}
      ></ExpenseItems>

      <ExpenseItems
        Date={expenses[1].date}
        title={expenses[1].title}
        Amount={expenses[1].Amount}
        Location={expenses[1].Location}
      ></ExpenseItems>

      <ExpenseItems
        Date={expenses[2].date}
        title={expenses[2].title}
        Amount={expenses[2].Amount}
        Location={expenses[2].Location}
      ></ExpenseItems>
    </div>
    <FormExpense/>
    </div>
  );
}

export default App;
