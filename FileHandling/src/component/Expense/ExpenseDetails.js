import './ExpenseDetails.css'
function ExpenseDetails(props){
  return (
    <div className="details">
  <div className="a">{props.title}</div>
  <div className="a">{props.Amount}</div>
  <div className="a">{props.Location}</div>
  </div>
  );



}
export default ExpenseDetails;