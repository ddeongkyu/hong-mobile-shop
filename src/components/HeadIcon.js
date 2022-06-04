import React from "react";
import "../App.css";
import { AiFillShopping } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
function HeadIcon() {
  return (
    <div className="HeadIcon">
      <AiFillShopping className="IconStyle" />
      <GiHamburgerMenu className="IconStyle" />
    </div>
  );
}
export default HeadIcon;
