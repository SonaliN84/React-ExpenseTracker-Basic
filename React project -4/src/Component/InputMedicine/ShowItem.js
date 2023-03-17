import {useState,useContext} from 'react';
import CartContext from '../../Store/cart-context';
import AvailableMedicineContext from '../../Store/available-medicine-context';
import './ShowItem.css'
const ShowItem=(props)=>{
    const [amount,setAmount]=useState(0)
    const [Modifyquantity,setModifyQuantity]=useState(props.quantity);
    const Medctx=useContext(AvailableMedicineContext)
    const ctx=useContext(CartContext);

    const InputHandler=(event)=>{
        
        setAmount(event.target.value)
     }
  const addItemHandler= (event)=>{
    event.preventDefault();
    console.log(props.name)
    console.log(amount)
    console.log(props.price)
    ctx.addItem({
        name:props.name,
        amount:amount,
        price:props.price
    })
    console.log(ctx.items)
    setModifyQuantity((prev)=>{
       return (prev-amount);
    })
    Medctx.items[props.count].quantity-=amount;
    
  }
  console.log(ctx.items)

    return(
        <li className={`quantity ${Modifyquantity===0 ? 'none':''}`}>
        <div >{props.name}-{props.description}-{props.price}-{Modifyquantity}
         Amount<input type="text" onChange={InputHandler}/>
        <button onClick={addItemHandler}>Add to cart</button>
        </div>
        </li>
    )
}
export default ShowItem;