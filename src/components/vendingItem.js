import React from "react";
import "../css/vendingItem.css";

function VendingItem({ productName, productPrice, handleClick }) {
  return (
    <div className="product" onClick={() => handleClick(productPrice)}>
      <p>{productName}</p>
      <p>{productPrice} kr</p>
    </div>
  );
}

export default VendingItem;
