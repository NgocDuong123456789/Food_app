import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

import className from "classnames/bind";
import style from "./Categories.module.scss";

// import { DataItem } from "../../Redux/Action/MenuFood";
const cx = className.bind(style);

export const CategoriesItem = ({ food, handleMenuClick }) => {
  return (
    <Link to={`/meal/${food.strMeal}`} className={cx("Link")}>
      <div className={cx("swapper")} onClick={() => handleMenuClick(food)}>
        <div className={cx("swapperImg")}>
          <img
            className={cx("foodimg")}
            src={food.strMealThumb}
            alt="com me nau bua an bua bo"
          />
          <h2 className={cx("foodname")}>{food.strMeal}</h2>
        </div>
      </div>
    </Link>
  );
};
