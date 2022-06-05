import React from "react";
import { HiArchive } from "react-icons/hi";
function MainProduct() {
  return (
    <div className="BestProductBoxStyle">
      <div className="BestProductBox">
        <img
          src={"/img/fabricChair.jpg"}
          alt="zz"
          className="BestProductPictureStyle"
        />
        <div className="BestProductName">Fabric Chair</div>
        <div className="BestProductDetail">A modern Fabric Chair...</div>
        <div className="BestPriceBox">
          <div className="BestPriceStyle">$680</div>
          <div className="BestBoxBox">
            <HiArchive className="BestBoxStyle" />
          </div>
        </div>
      </div>
      <div className="BestProductBox">
        <img
          src={"/img/blackChair.jpg"}
          alt="zz"
          className="BestProductPictureStyle"
        />
        <div className="BestProductName">Black Chair</div>
        <div className="BestProductDetail">Very Uncomfortable Chair...</div>
        <div className="BestPriceBox">
          <div className="BestPriceStyle">$990</div>
          <div className="BestBoxBox">
            <HiArchive className="BestBoxStyle" />
          </div>
        </div>
      </div>
      <div className="BestProductBox">
        <img
          src={"/img/greyAndWoodChair.jpg"}
          alt="zz"
          className="BestProductPictureStyle"
        />
        <div className="BestProductName">Grey Wood Chair</div>
        <div className="BestProductDetail">Very Normal Chair! pengsoo</div>
        <div className="BestPriceBox">
          <div className="BestPriceStyle">$1599</div>
          <div className="BestBoxBox">
            <HiArchive className="BestBoxStyle" />
          </div>
        </div>
      </div>
      <div className="BestProductBox">
        <img
          src={"/img/whiteChairWithPink풍선.jpg"}
          alt="zz"
          className="BestProductPictureStyle"
        />
        <div className="BestProductName">White Chair</div>
        <div className="BestProductDetail">
          Normal White Chair! (Balloon not included)
        </div>
        <div className="BestPriceBox">
          <div className="BestPriceStyle">$3390</div>
          <div className="BestBoxBox">
            <HiArchive className="BestBoxStyle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProduct;
