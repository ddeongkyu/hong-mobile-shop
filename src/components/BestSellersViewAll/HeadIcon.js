import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function HeadIcon() {
  let navigate = useNavigate();
  const onMainGoGo = () => {
    navigate("/");
  };
  const onGoFavorites = () => {
    navigate("/Favorites");
  };
  return (
    <div className="HeadIcon">
      <div className="HeadArrowBack">
        <BiArrowBack className="IconStyle" onClick={onMainGoGo} />
      </div>
      <AiFillShopping className="IconStyle" onClick={onGoFavorites} />
      <GiHamburgerMenu className="IconStyle" />
    </div>
  );
}
export default HeadIcon;
