// import './ExpenseDate.css'
import Card from '../UI/Card'
function ExpenseDate(props){

    const month=props.date.toLocaleString('en-US',{month:'long'})
    const day=props.date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.date.getFullYear();
    
    return (
       
        <div>{month}-{day}-{year}
        </div>
    );




}
export default ExpenseDate;