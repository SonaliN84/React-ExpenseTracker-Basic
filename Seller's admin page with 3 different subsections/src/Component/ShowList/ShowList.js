import React from "react";
import ShowItem from "./ShowItem";
import './ShowList.css'
const ShowList = (props) => {
//   console.log(props.items[0].Category);
  const FoodCategory = props.items.filter((item) => {
    return item.Category === "Food";
  });
//   console.log(FoodCategory);

  const ElectronicCategory = props.items.filter((item) => {
    return item.Category === "Electronics";
  });
//   console.log(ElectronicCategory);
  


  const SkinCareCategory = props.items.filter((item) => {
    return item.Category === "SkinCare";
  });
//   console.log(SkinCareCategory);


  return (
    <div className="Container">
      <h1>Products</h1>
     
      <h3>Electronic Items</h3>
      <ul>
      {ElectronicCategory.map((a) => (
        <ShowItem
          id={a.ProductID}
          sp={a.SellingPrice}
          ProductName={a.ProductName}
          Category={a.Category}
        />
      ))}
      </ul>

      <h3>Food Items</h3>
      <ul>
      {FoodCategory.map((a) => (
        <ShowItem
          id={a.ProductID}
          sp={a.SellingPrice}
          ProductName={a.ProductName}
          Category={a.Category}
        />
      ))}
      </ul>

      <h3>SkinCare Items</h3>
      <ul>
      {SkinCareCategory.map((a) => (
        <ShowItem
          id={a.ProductID}
          sp={a.SellingPrice}
          ProductName={a.ProductName}
          Category={a.Category}
        />
      ))}
      </ul>
    </div>
  );
};
export default ShowList;
