import ExpenseItems from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    console.log(expense.date);
    return expense.date.getFullYear().toString() === filteredYear;
  });


  // let ExpenseContent=<p className="fs-5 text-light bg-dark">No Expenses Found.</p>;
  let expensezero;
  let ExpenseContent;
  
  if(filteredExpenses.length === 0)
  {
   expensezero=<p className="fs-5 text-light bg-dark text-center border border-dark rounded py-1">No Expenses Found.</p>
  }
  let oneExpense;
  if(filteredExpenses.length === 1)
  {
   ExpenseContent= filteredExpenses.map((expense) => (
      <ExpenseItems
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ))
    oneExpense=<p className="fs-5 my-4 text-center fw-bold">Only single Expense here. Please add more...</p>
  }
  if(filteredExpenses.length > 1)
  {
     ExpenseContent= filteredExpenses.map((expense) => (
      <ExpenseItems
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ))
    
  }

  


  return (
    <div class="container my-4">
      <div>
        <h3 className="my-4">Expense History</h3>
      </div>
      <div  className="border border-secondary p-2 rounded shadow p-3 mb-5 bg-body rounded">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <table class="table my-4 table-borderless">
        <thead class="thead-dark fs-5">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Title</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>

        {ExpenseContent}
        
          
          {/* {filteredExpenses.length === 0 ? (
            <p className="fs-5">No Expenses Found.</p>
          ) : (
            filteredExpenses.map((expense) => (
              <ExpenseItems
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
              />
            ))
          )} */}

          {/* {filteredExpenses.length === 0 &&  <p className="fs-5">No Expenses Found.</p>}
          {filteredExpenses.length >0 && (
          filteredExpenses.map((expense) => (
              <ExpenseItems
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
              />
              
            ))
           )
            
          } */}


        </tbody>
      </table>
      {oneExpense}
      {expensezero}
    </div>
    </div>
  );
}
export default Expense;
