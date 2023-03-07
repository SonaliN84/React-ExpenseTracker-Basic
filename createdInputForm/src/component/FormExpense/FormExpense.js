import './FormExpense.css'
function FormExpense() {

    const titleHandler=(event)=>{
        console.log(event.target.value)
    }

    const AmountHandler=(event)=>{
        console.log(event.target.value)
    }

    const DateHandler=(event)=>{
        console.log(event.target.value)
    }




  return (
    <div className="container my-4">
    <h3 className='my-4'>Enter Expense details</h3>
    <form>
      <div className="form-group">
        <label for="expenseTitle">Expense Title</label>
        <input
          type="text"
          className="form-control"
          id="expenseTitle"
          onChange={titleHandler}
        />
      </div>
      <div className="form-group my-3">
        <label for="expenseAmount">Expense Amount</label>
        <input
          type="text"
          className="form-control"
          id="expenseAmount"
          onChange={AmountHandler}
        />
      </div>
      <div className="form-group my-3">
        <label for="expenseDate">Expense Date</label>
        <input
          type="date"
          className="form-control"
          id="expenseDate"
          onChange={DateHandler}
        />
      </div>
      <div className="form-group my-3">
        <button className='btn btn-primary btn-block my-4'>Add expense</button>
      </div>
    </form>
    </div>
  );
}
export default FormExpense;
