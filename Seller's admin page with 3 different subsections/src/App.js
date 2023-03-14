import React,{useState} from 'react';
import InputForm from './Component/InputForm/InputForm';
import ShowList from './Component/ShowList/ShowList';
function App() {
  const [ItemList,setItemList]=useState([]);

  const InputFormChangeHandler=(Id,sp,name,category)=>{
     setItemList((prev)=>(
      [...prev,{ProductID:Id, SellingPrice:sp ,ProductName:name ,Category:category}]
     ))
  }
  return (
    <div>
    <InputForm onInputChange={InputFormChangeHandler}/>
    <ShowList items={ItemList}/>
    </div>
  );
}

export default App;
