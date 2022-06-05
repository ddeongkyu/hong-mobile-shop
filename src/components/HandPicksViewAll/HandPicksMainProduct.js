import React from "react";
import { HiArchive } from "react-icons/hi";
function MainProduct() {
  return (
    <div className="BestProductBoxStyle">
      <div className="BestProductBox">
        <img
          src={"/img/woodSchoolChair.jpg"}
          alt="zz"
          className="BestProductPictureStyle"
        />
        <div className="BestProductName">School Chair</div>
        <div className="BestProductDetail">뭐 ㅋㅋㅋ</div>
        <div className="BestPriceBox">
          <div className="BestPriceStyle">$3900</div>
          <div className="BestBoxBox">
            <HiArchive className="BestBoxStyle" />
          </div>
        </div>
      </div>
      <div className="BestProductBox">
        <img
          src={"/img/royalStyleChair.jpg"}
          alt="zz"
          className="BestProductPictureStyle"
        />
        <div className="BestProductName">Royal Chair</div>
        <div className="BestProductDetail">Very Expensive Chair</div>
        <div className="BestPriceBox">
          <div className="BestPriceStyle">$9999</div>
          <div className="BestBoxBox">
            <HiArchive className="BestBoxStyle" />
          </div>
        </div>
      </div>
      <div className="BestProductBox">
        <img
          src={"/img/pinkpinkChair.jpg"}
          alt="zz"
          className="BestProductPictureStyle"
        />
        <div className="BestProductName">PinkPink</div>
        <div className="BestProductDetail">Very Cute Pink Chair</div>
        <div className="BestPriceBox">
          <div className="BestPriceStyle">$6599</div>
          <div className="BestBoxBox">
            <HiArchive className="BestBoxStyle" />
          </div>
        </div>
      </div>
      <div className="BestProductBox">
        <img
          src={"/img/brownChair.jpg"}
          alt="zz"
          className="BestProductPictureStyle"
        />
        <div className="BestProductName">Brown Chair</div>
        <div className="BestProductDetail">Nomral Brown Chair</div>
        <div className="BestPriceBox">
          <div className="BestPriceStyle">$390</div>
          <div className="BestBoxBox">
            <HiArchive className="BestBoxStyle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProduct;
