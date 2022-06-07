import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "../../db/data.json";
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
        {data.data.map((id) =>
          id.id <= 5 ? (
            <Link to={`/products/${id.id}`}>
              <div className="productBox">
                <img className="productPictureStyle" alt="alt" src={id.src} />
              </div>
            </Link>
          ) : null
        )}
      </div>

      <div className="MainTextBlock">
        <div className="MainSellOrPicks">Hand-picks</div>
        <div className="MainViewAllText" onClick={onGoHandPicksViewAll}>
          View All
        </div>
      </div>
      <div className="productWrappingBox">
        {data.data.map((id) =>
          id.id > 5 ? (
            <Link to={`/products/${id.id}`}>
              <div className="productBox">
                <img className="productPictureStyle" alt="alt" src={id.src} />
              </div>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Main;
