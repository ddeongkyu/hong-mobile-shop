import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import data from "../../db/data.json";
function Favorites() {
  let navigate = useNavigate();
  const onQuantityPlus = () => {};
  const onQuantityMinus = () => {};
  const onShoppingCartDelete = (e) => {
    console.log(e.target.id);
  };
  // const localStorageLength = () => {
  //   for (let i = 0; i <= localStorage.length; i++) {
  //     console.log(localStorage.getItem(i));
  //   }
  // };

  // 밑에줄에서 모든 key 찾았어... // 지웠음...신경x
  //아 로컬스토리지에 key를 id가 아니라 1씩 증가하는 자연수로 넣는다면? ????? 흠???
  // 실패 ㅋㅋ 아 짜증나
  const codeCode = new Array();
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    codeCode.push(JSON.parse(localStorage.getItem(key)));
  }
  // console.log(codeCode);
  // console.log(outCode);
  //code 안에 이중배열에서 꺼내야됨...
  //이중배열을 outCode로 꺼냈는데 이걸 어떻게 map해서 렌더링 해야되지...

  // console.log(
  //   codeCode.map((curr, index) => {
  //     console.log("id", curr.id, "index", index);
  //     console.log("Quantity", curr.Quantity, "index", index);
  //     return curr;
  //   })
  // );
  // What i Want -> 수정된 배열을 가져와서 그 배열안의 원소대로 렌더링 하는것....
  // localStorage Length 만큼 for문을 돌려서 배열을 만들어야되는데....
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
      <div className="detailHeadBox">
        <BiArrowBack className="IconStyle" onClick={() => navigate(-1)} />
        <span>장 바 구 늬</span>
        <BsFillHeartFill className="detailHeadBoxHeart" />
      </div>

      {codeCode.map((curr, index) =>
        localStorage.length === 0 ? (
          <div style={{ width: "50px", height: "50px", fontSize: "30px" }}>
            장바구니 비었어
          </div>
        ) : (
          <div className="FavoritesProductBox">
            <div className="FavoritesProductImgAndPriceBox">
              <div className="FavoritesProductImg">
                <img
                  alt="WHATEVERTV"
                  src={curr.src}
                  className="FavoritesProductImg"
                />
              </div>
              <div className="FavoritesPriceAndQuantiy">
                <div className="FavoritesNameBox">{curr.name}</div>
                <div className="FavoritesPriceBox">${curr.price}</div>
              </div>
            </div>
            <hr className="FavoritesHrStyle" />
            <div className="FavoritesQuantityAndDeleteBox">
              <div className="FavoritesPlusMinus">
                <AiOutlinePlusCircle onClick={onQuantityPlus} />
                {curr.Quantity}
                <AiOutlineMinusCircle onClick={onQuantityMinus} />
              </div>
              <div className="FavoritesDelete">
                <AiOutlineDelete onClick={onShoppingCartDelete} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
export default Favorites;
