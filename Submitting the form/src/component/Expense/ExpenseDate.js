import './ExpenseDate.css'
import Card from '../UI/Card'
function ExpenseDate(props){

    const month=props.Date.toLocaleString('en-US',{month:'long'})
    const day=props.Date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.Date.getFullYear();
    
    return (
        <Card className="expdate">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </Card> 
    );




}
export default ExpenseDate;