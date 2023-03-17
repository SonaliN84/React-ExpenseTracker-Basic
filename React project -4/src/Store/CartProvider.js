import CartContext from './cart-context';
import {useState} from 'react';

const CartProvider=(props)=>{

const addItemToCartHandler=(item)=>{
    let flag=true;
    items.forEach((i,index)=>{
       if( i.name==item.name)
       {
        items[index].amount=Number.parseInt(items[index].amount)
        items[index].amount+=Number.parseInt(item.amount);
        setItems((prev)=>{
           return [...prev]
        })
           console.log(typeof(items[index].amount))
           console.log(item.amount)
           
           
           flag=false;
       }

    })
    if(flag){
    setItems((prev)=>{
        return [...prev,item];
    })
}
}
 
const removeItemFromCartHandler=(id)=>{}
 
const [items,setItems]=useState([])
const [totalAmount,setTotalAmount]=useState(0)

const cartContext={
    items:items,
    totalAmount:totalAmount,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler,
    setTotalAmount:setTotalAmount
}


  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;