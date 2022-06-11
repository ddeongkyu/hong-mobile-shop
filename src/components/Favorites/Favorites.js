import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import data from "../../db/data.json";
function Favorites() {
  const onQuantityPlus = () => {};
  const onQuantityMinus = () => {};
  const onShoppingCartDelete = () => {};
  console.log(data.data.map((data) => data.Quantity >= 1));
  return (
    <div className="FavoritesContainer">
      {/* <div className="FavoritesProductBox">
        <div className="FavoritesProductImgAndPriceBox">
          <div className="FavoritesProductImg">
            <img
              alt="WHATEVERTV"
              src={"img/pinkChair.jpg"}
              className="FavoritesProductImg"
            />
          </div>
          <div className="FavoritesPriceAndQuantiy">
            <div className="FavoritesNameBox">PINK CHAIR</div>
            <div className="FavoritesPriceBox">$500.00</div>
          </div>
        </div>
        <hr className="FavoritesHrStyle" />
        <div className="FavoritesQuantityAndDeleteBox">
          <div className="FavoritesPlusMinus">
            <AiOutlinePlusCircle onClick={onQuantityPlus} />
            {JSON.parse(localStorage.getItem(2)).Quantity}
            <AiOutlineMinusCircle onClick={onQuantityMinus} />
          </div>
          <div className="FavoritesDelete">
            <AiOutlineDelete onClick={onShoppingCartDelete} />
          </div>
        </div>
      </div> */}
      {data.data.map((data) =>
        data.Quantity >= 1 ? (
          <div className="FavoritesProductBox">
            <div className="FavoritesProductImgAndPriceBox">
              <div className="FavoritesProductImg">
                <img
                  alt="WHATEVERTV"
                  src={"img/pinkChair.jpg"}
                  className="FavoritesProductImg"
                />
              </div>
              <div className="FavoritesPriceAndQuantiy">
                <div className="FavoritesNameBox">{data.name}</div>
                <div className="FavoritesPriceBox">${data.price}</div>
              </div>
            </div>
            <hr className="FavoritesHrStyle" />
            <div className="FavoritesQuantityAndDeleteBox">
              <div className="FavoritesPlusMinus">
                <AiOutlinePlusCircle onClick={onQuantityPlus} />
                {JSON.parse(localStorage.getItem(2)).Quantity}
                <AiOutlineMinusCircle onClick={onQuantityMinus} />
              </div>
              <div className="FavoritesDelete">
                <AiOutlineDelete onClick={onShoppingCartDelete} />
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}
export default Favorites;
