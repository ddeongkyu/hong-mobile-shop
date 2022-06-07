import React from "react";
import { HiArchive } from "react-icons/hi";
import product from "../../Product";
import data from "../../db/data.json";
function MainProduct() {
  const handPicks = product.filter((item) => item.id > 5);

  return (
    <div className="BestProductBoxStyle">
      {handPicks.map((item) => (
        <div className="BestProductBox">
          <img
            src={item.src}
            className="BestProductPictureStyle"
            alt="PENGSOO"
          />
          <div className="BestProductName">{item.name}</div>
          <div className="BestProductDetail">{item.shortExplanation}</div>
          <div className="BestPriceBox">
            <div className="BestPriceStyle">${item.price}</div>
            <div className="BestBoxBox">
              <HiArchive className="BestBoxStyle" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainProduct;