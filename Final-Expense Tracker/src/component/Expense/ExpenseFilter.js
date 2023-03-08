function ExpenseFilter(props){
   const dropdownchangeHandler=(event)=>{
    props.onChangeFilter(event.target.value)
   }

return(
    <div className="my-4">Select Year
    <select value={props.selected} onChange={dropdownchangeHandler} class="form-select" aria-label="Default select example">
    
    <option value="2023">2023</option>
    <option value="2022">2022</option>
    <option value="2021">2021</option>
    <option value="2020">2020</option>
  </select>
  </div>
);




}
export default ExpenseFilter;