import React, {useState} from 'react';
import './Input.css'


function InputForm(props){

    const [ProductID,setProductID]=useState('');
    const [SellingPrice,setSellingPrice]=useState('');
    const [ProductName,setProductName]=useState('');
    const [ProductCategory,setProductCategory]=useState('Food');

  const ProductIDHandler=(event)=>{
    setProductID(event.target.value);
}

const SPHandler=(event)=>{
    setSellingPrice(event.target.value);
}

const ProductNameHandler=(event)=>{
    setProductName(event.target.value);
}

const CategoryHandler=(event)=>{
   setProductCategory(event.target.value);
}
const FormSubmitHandler=(event)=>{
    event.preventDefault();
  
  const Product={
    ProductID,
    SellingPrice,
    ProductName,
    ProductCategory
  }
  const ProductDetails=JSON.stringify(Product)
  localStorage.setItem(ProductID,ProductDetails);
  
  props.onInputChange(ProductID,SellingPrice,ProductName,ProductCategory);
  setProductID('');
  setSellingPrice('');
  setProductName('');
  setProductCategory("Food");


}


   return (
    <div >
        <form onSubmit={FormSubmitHandler} className="form">
            <label htmlFor="id">Product ID</label>
            <input type='text' id="id" onChange={ProductIDHandler} value={ProductID}/>
            
            <label htmlFor="SP">Selling Price</label>
            <input type='text' id="SP" onChange={SPHandler} value={SellingPrice}/>
            
            <label htmlFor="Name">Product Name</label>
            <input type='text' id="Name" onChange={ProductNameHandler} value={ProductName}/>

            <label htmlFor="category">Choose a Category</label>
            <select id="category" onChange={CategoryHandler} value={ProductCategory}>
                <option>Food</option>
                <option>SkinCare</option>
                <option>Electronics</option>
                
            </select>
            <button id="submitbutton">Add Product</button>
        </form>
    </div>


   );


}
export default InputForm;