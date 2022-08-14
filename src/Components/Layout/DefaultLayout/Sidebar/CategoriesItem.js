import { Link } from "react-router-dom";
import { memo } from "react";
import className from "classnames/bind";
import style from "./Sidebar.module.scss";

const cx = className.bind(style);

const CategoriesItem = ({ category, handleMenuClick }) => {
  return (
    <Link to={`/category/${category.strCategory}`}>
      <div
        className={cx("swapper")}
        onClick={() => handleMenuClick(category.strCategory)}
      >
        <h2 className={cx("foodname")}>{category.strCategory}</h2>
        <div className={cx("swapperImg")}>
          <img
            className={cx("foodimg")}
            src={category.strCategoryThumb}
            alt="com me nau bua an bua bo"
          />
        </div>
      </div>
    </Link>
  );
};

export default memo(CategoriesItem);
