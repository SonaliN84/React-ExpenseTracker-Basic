import {useState} from 'react'
import Expense from "./component/Expense/Expense";

// import "./App.css";
import NewExpense from "./component/FormExpense/NewExpense";
const DummyExpense = [
  { id:1,
    date: new Date(2021, 2, 22),
    title: "Car Insurance",
    Amount: "Rs 1000",
    
  },
  { id:2,
    date: new Date(2022, 7, 12),
    title: "Birthday",
    Amount: "Rs 2000",
    
  },
  { id:3,
    date: new Date(2023, 2, 17),
    title: "Shopping",
    Amount: "Rs 700",
   
  }
];
function App() {
  
 const[expenses,setExpenses]= useState(DummyExpense);
  
  const addExpenseHandler=(expense)=>{
    console.log(expense)
    // setExpenses([...expenses,expense])
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]
    })
    
  }

  return (
    <div>
    <div className="p-3 mb-2 bg-info text-white"><h1 class="text-center  ">Expense Tracker</h1></div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}/>
   
    </div>
  );
}

export default App;
