import AvailableMedicineContext from "./available-medicine-context";
import {useState} from 'react'
const AvailableMedicineProvider=(props)=>{
    
    const [items,setItems]=useState([])
   
    
    const addItemToMedicineHandler=(item)=>{
        setItems((prev)=>{
            return [...prev,item];
        })
    }
    

    const medicineContext={
        items:items,
        addItem:addItemToMedicineHandler,
        
    }

   return (
    <AvailableMedicineContext.Provider value={medicineContext}>
    {props.children}
</AvailableMedicineContext.Provider>

   );
}
export default AvailableMedicineProvider;