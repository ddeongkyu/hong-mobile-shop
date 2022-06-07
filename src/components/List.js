import data from "../db/data.json";
import { useParams, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsFillHeartFill, BsCartPlusFill } from "react-icons/bs";
export default function Day() {
  const { id } = useParams();
  let navigate = useNavigate();
  const onMainGoGo = () => {
    navigate("/");
  };
  return (
    <>
      <div className="detailHeadBox">
        <BiArrowBack className="IconStyle" onClick={onMainGoGo} />
        Product
        <BsFillHeartFill className="detailHeadBoxHeart" />
      </div>
      <div className="detailTotalBox">
        <div className="detailPageBox">
          <img
            src={data.data[id - 1].src}
            alt="alt"
            className="detailPageBoxImg"
          />
          <div className="detailNameAndPrice">
            <div>{data.data[id - 1].name}</div>
            <div>${data.data[id - 1].price}</div>
          </div>
          <div className="detailLongExplanation">
            {data.data[id - 1].longExplanation}
          </div>
          <div className="detailShoppingCart">
            <BsCartPlusFill className="detailShoppingCartStyle" />
          </div>
          <div className="detailAddToCart">+ Add to Cart</div>
        </div>
      </div>
    </>
  );
}
