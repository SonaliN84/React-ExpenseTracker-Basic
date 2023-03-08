import ExpenseItems from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div class="container my-4">
      <div>
        <h3>Expense History</h3>
      </div>
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
          {props.items.map((expense) => (
            <ExpenseItems
              key={expense.id}
              Date={expense.date}
              title={expense.title}
              Amount={expense.Amount}
            />
          ))}

          {/* <ExpenseItems
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
          /> */}
        </tbody>
      </table>
    </div>
  );
}
export default Expense;
