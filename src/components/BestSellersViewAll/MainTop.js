import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import data from "../../db/data.json";
function MainTop() {
  const bestSeller = data.data.filter((id) => id.id <= 5).length;
  return (
    <div className="BestMainTopBox">
      <div className="BestProductStyle">{bestSeller} Products</div>
      <div className="BestMainPopularBox">
        Popular
        <BiDownArrowAlt className="BiDownArrowAlt" />
      </div>
    </div>
  );
}

export default MainTop;
