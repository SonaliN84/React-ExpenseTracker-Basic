import AvailableMedicineContext from "../../Store/available-medicine-context";
import { useContext } from "react";
import ShowItem from "./ShowItem";
const ShowAvailableMedicine =()=>{
 let count=0;
 const ctx =useContext(AvailableMedicineContext);  
 console.log(ctx.items) 
 return(
    <ul>
   {
    ctx.items.map((item)=>(
     <ShowItem name={item.name} description={item.description} price={item.price} quantity={item.quantity} count={count++}/>

    ))
   }
   </ul>


 );
}
export default ShowAvailableMedicine;