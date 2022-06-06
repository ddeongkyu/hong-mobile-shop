import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import product from "../../Product";
function Main() {
  let navigate = useNavigate();
  const onGoBestSellersViewAll = () => {
    navigate("/BestSellers");
  };
  const onGoHandPicksViewAll = () => {
    navigate("/Hand-picks");
  };
  console.log(product);
  const bestSellers = product.filter((item) => item.id <= 5);
  const handPicks = product.filter((item) => item.id > 5);
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
        {bestSellers.map((item) => (
          <div className="productBox">
            <img className="productPictureStyle" src={item.src} alt="alt" />
          </div>
        ))}{" "}
      </div>

      <div className="MainTextBlock">
        <div className="MainSellOrPicks">Hand-picks</div>
        <div className="MainViewAllText" onClick={onGoHandPicksViewAll}>
          View All
        </div>
      </div>
      <div className="productWrappingBox">
        {handPicks.map((item) => (
          <div className="productBox">
            <img className="productPictureStyle" src={item.src} alt="alt" />
          </div>
        ))}{" "}
      </div>

      {/* <div className="productWrappingBox">
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
      </div> */}
    </div>
  );
}

export default Main;
