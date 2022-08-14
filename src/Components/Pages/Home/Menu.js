import { Link } from "react-router-dom";
import className from "classnames/bind";
import style from "./Home.module.scss";

const cx = className.bind(style);

export const Menu = ({ food, handleMenuClick }) => {
  return (
    <Link to={`/meal/${food.strMeal}`}>
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
