import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
function HeadIcon() {
  let navigate = useNavigate();
  const onGoFavorites = () => {
    navigate("/Favorites");
  };

  return (
    <div className="HeadIcon">
      <AiFillShopping className="IconStyle" onClick={onGoFavorites} />
      <GiHamburgerMenu className="IconStyle" />
    </div>
  );
}
export default HeadIcon;
