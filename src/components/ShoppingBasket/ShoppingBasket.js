import React from "react";
import { useNavigate } from "react-router-dom";
function ShoppingBasket() {
  const onClick = () => {
    alert("WHATEVERTV");
  };
  return (
    <div>
      <button onClick={onClick}>
        Here is ShoppingBasket Components
        <br /> CLICK
      </button>
    </div>
  );
}

export default ShoppingBasket;
