import React from "react";

const Product = ({ productName, productPrice }) => {
    return (
      <div>
        <h2>Product Information</h2>
        <p>Product Name: {productName}</p>
        <p>Product Price: ${productPrice}</p>
      </div>
    );
  };
  
  export default Product;