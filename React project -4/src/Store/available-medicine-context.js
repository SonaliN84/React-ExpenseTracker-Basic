import React from 'react';

const AvailableMedicineContext=React.createContext({
    items:[],
    addItem:(item)=>{}
})
export default AvailableMedicineContext;