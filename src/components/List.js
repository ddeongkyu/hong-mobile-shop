import React, { useState } from "react";
import data from "../db/data.json";
import { useParams, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsFillHeartFill, BsFillCircleFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

function ProductDetails() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [heart, setHeart] = useState(false);
  const [green, setGreen] = useState(false);
  const [red, setRed] = useState(false);
  const [pink, setPink] = useState(false);
  const onHeartClick = () => {
    setHeart(!heart);
  };
  const onGreenClick = () => {
    setGreen(!green);
    setRed(false);
    setPink(false);
  };
  const onRedClick = () => {
    setGreen(false);
    setRed(!red);
    setPink(false);
  };
  const onPinkClick = () => {
    setGreen(false);
    setRed(false);
    setPink(!pink);
  };
  const onAddToCart = () => {
    alert(
      "쇼핑카트에 " +
        data.data[id - 1].name +
        "상품이 추가되었습니다! 꼭 사주세요!" +
        "\n" +
        "가격은 " +
        data.data[id - 1].price +
        "달러 입니다."
    );
  };
  return (
    <>
      <div className="detailHeadBox">
        <BiArrowBack className="IconStyle" onClick={() => navigate(-1)} />
        Product
        <BsFillHeartFill
          className={heart ? "detailHeadBoxHeartClicked" : "detailHeadBoxHeart"}
          onClick={onHeartClick}
        />
      </div>
      <div className="detailTotalBox">
        <div
          className={
            red
              ? "detailPageBoxWithRed"
              : green
              ? "detailPageBoxWithGreen"
              : pink
              ? "detailPageBoxWithPink"
              : "detailPageBox"
          }
        >
          <img
            src={data.data[id - 1].src}
            alt="alt"
            className="detailPageBoxImg"
          />
          <div className="detailNameAndPrice">
            <div>{data.data[id - 1].name}</div>
            <div>${data.data[id - 1].price}</div>
          </div>
          <div className="detailCircleBox">
            <BsFillCircleFill
              className={
                green
                  ? "detailCircleGreenNotClicked detailCircleYesClicked"
                  : "detailCircleGreenNotClicked"
              }
              onClick={onGreenClick}
            />
            &nbsp; &nbsp;
            <BsFillCircleFill
              className={
                pink
                  ? "detailCirclePinkNotClicked detailCircleYesClicked"
                  : "detailCirclePinkNotClicked"
              }
              onClick={onPinkClick}
            />
            &nbsp; &nbsp;
            <BsFillCircleFill
              className={
                red
                  ? "detailCircleRedNotClicked detailCircleYesClicked"
                  : "detailCircleRedNotClicked"
              }
              onClick={onRedClick}
            />
          </div>
          <div className="detailLongExplanation">
            {data.data[id - 1].longExplanation}
          </div>
          <div className="detailShoppingCart" onClick={onAddToCart}>
            <FiShoppingCart
              className="detailShoppingCartStyle"
              style={{ color: "white" }}
            />
          </div>
          <div className="detailAddToCart">+ Add to Cart</div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
