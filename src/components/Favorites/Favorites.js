import React from "react";
import { useNavigate } from "react-router-dom";
function Favorites() {
  let navigate = useNavigate();
  const onGoShoppingBasket = () => {
    navigate("/ShoppingBasket");
  };

  return (
    <div>
      <div>HERE IS FAVORITES COMPONENTS</div>
      <button onClick={onGoShoppingBasket}>
        Go To ShopingBasket Components
      </button>
    </div>
  );
}
export default Favorites;
