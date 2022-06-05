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
  return (
    <div className="HeadIcon">
      <BiArrowBack className="IconStyle" onClick={onMainGoGo} />
      <AiFillShopping className="IconStyle" />
      <GiHamburgerMenu className="IconStyle" />
    </div>
  );
}
export default HeadIcon;
