import React from "react";
import { HiArchive } from "react-icons/hi";
import data from "../../db/data.json";
import { Link } from "react-router-dom";
function MainProduct() {
  return (
    <div className="BestProductBoxStyle">
      {data.data.map((id) =>
        id.id <= 5 ? (
          <div className="BestProductBox">
            <img
              src={id.src}
              className="BestProductPictureStyle"
              alt="PENGSOO"
            />
            <Link to={`/products/${id.id}`}>
              <div className="BestProductName">{id.name}</div>
            </Link>
            <div className="BestProductDetail">{id.shortExplanation}</div>
            <div className="BestPriceBox">
              <div className="BestPriceStyle">${id.price}</div>
              <div className="BestBoxBox">
                <HiArchive className="BestBoxStyle" />
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default MainProduct;
