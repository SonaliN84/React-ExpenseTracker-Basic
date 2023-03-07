import './ExpenseDate.css'
function ExpenseDate(props){

    const month=props.Date.toLocaleString('en-US',{month:'long'})
    const day=props.Date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.Date.getFullYear();
    
    return (
        <div class="expdate">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div> 
    );




}
export default ExpenseDate;