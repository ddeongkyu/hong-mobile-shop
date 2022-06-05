import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function Main() {
  let navigate = useNavigate();
  const onGoBestSellersViewAll = () => {
    navigate("/BestSellers");
  };
  const onGoHandPicksViewAll = () => {
    navigate("/Hand-picks");
  };
  return (
    <div>
      <div className="MainBlock">
        <div className="classicBox">
          <div className="classicBoxLeft">
            The Classic
            <br />
            <span className="classicApperance">Classic apperance</span>
            <br />
            <span className="classicApperance">With a splash of color</span>
            <div>
              <AiOutlineArrowRight className="AiOutlineArrowRight" />
            </div>
          </div>
          <div className="classicBoxRight">
            <img
              className="classicBoxRight"
              src={"/img/fabricChair.jpg"}
              alt="fabricChair"
            />
          </div>
        </div>
      </div>
      <div className="MainTextBlock">
        <div className="MainSellOrPicks">Best Sellers</div>
        <div className="MainViewAllText" onClick={onGoBestSellersViewAll}>
          View All
        </div>
      </div>
      <div className="productWrappingBox">
        <span className="productBox">
          <img
            className="productPictureStyle"
            src={"/img/blackChair.jpg"}
            alt="카떼라떼"
          />
        </span>
        <span className="productBox">
          <img
            className="productPictureStyle"
            src={"/img/fabricChair.jpg"}
            alt="카떼라떼"
          />
        </span>
        <span className="productBox">
          <img
            className="productPictureStyle"
            src={"/img/greyAndWoodChair.jpg"}
            alt="카떼라떼"
          />
        </span>
        <span className="productBox">
          <img
            className="productPictureStyle"
            src={"/img/whiteChairWithPink풍선.jpg"}
            alt="카떼라떼"
          />
        </span>
      </div>

      <div className="MainTextBlock">
        <div className="MainSellOrPicks">Hand-picks</div>
        <div className="MainViewAllText" onClick={onGoHandPicksViewAll}>
          View All
        </div>
      </div>

      <div className="productWrappingBox">
        <div className="productBox">
          <img
            className="productPictureStyle"
            src={"/img/pinkChair.jpg"}
            alt="카떼라떼"
          />
        </div>
        <div className="productBox">
          <img
            className="productPictureStyle"
            src={"/img/whiteChair.jpg"}
            alt="카떼라떼"
          />
        </div>
        <div className="productBox">
          <img
            className="productPictureStyle"
            src={"/img/royalStyleChair.jpg"}
            alt="카떼라떼"
          />
        </div>
        <div className="productBox">
          <img
            className="productPictureStyle"
            src={"/img/brownChair.jpg"}
            alt="카떼라떼"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
