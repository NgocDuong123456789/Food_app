import { Link } from "react-router-dom";

import className from "classnames/bind";
import style from "./Search.module.scss";

const cx = className.bind(style);

export const SearchItem = ({ searchFood, handleClickFood }) => {
  return (
    <div>
      <div className={cx("result-item")}>
        <Link to={`/meal/${searchFood.strMeal}`}>
          <p onClick={() => handleClickFood(searchFood)}>
            {searchFood.strMeal}
          </p>
        </Link>
      </div>
    </div>
  );
};
