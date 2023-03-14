import './ShowItem.css'
const ShowItem =(props)=>{

   const DeleteHandler=(event)=>{
     const child=event.target.parentElement;
     const parent=child.parentElement;
     parent.removeChild(child);
     localStorage.removeItem(props.id)
     console.log(props.id)
   }
  return(
    <div>
      <li>{props.ProductName}-{props.sp}-{props.Category}
      <button onClick={DeleteHandler} id="button">Delete Product</button>
      </li>  
    </div>
  );
}
export default ShowItem;