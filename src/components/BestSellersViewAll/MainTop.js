import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
function MainTop() {
  return (
    <div className="BestMainTopBox">
      <div className="BestProductStyle">120 Products</div>
      <div className="BestMainPopularBox">
        Popular
        <BiDownArrowAlt className="BiDownArrowAlt" />
      </div>
    </div>
  );
}

export default MainTop;
