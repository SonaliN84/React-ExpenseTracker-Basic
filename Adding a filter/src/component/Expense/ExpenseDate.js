// import './ExpenseDate.css'
import Card from '../UI/Card'
function ExpenseDate(props){

    const month=props.Date.toLocaleString('en-US',{month:'long'})
    const day=props.Date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.Date.getFullYear();
    
    return (
       
        <div>{month}-{day}-{year}
        </div>
    );




}
export default ExpenseDate;