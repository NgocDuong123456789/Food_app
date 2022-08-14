import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ApiCategories } from "../../../Redux/Action/MenuFood";
import CategoriesItem from "./CategoriesItem.js";
import { ActionMenu } from "../../../Redux/Action/MenuFood";
import className from "classnames/bind";
import style from "./Sidebar.module.scss";

const cx = className.bind(style);

export const Sidebar = () => {
  const dispatch = useDispatch();
  const dataCategories = useSelector((state) => state.Food);
  useEffect(() => {
    dispatch(ApiCategories());
  }, []);

  const handleMenuClick = (id) => {
    const filterMenu = dataCategories.Menu.filter(
      (item) => id === item.strCategory
    );

    dispatch(ActionMenu(filterMenu));
  };

  return (
    <div className={cx("sidebar")}>
      <h1 className={cx("Title")}>Category</h1>
      <div className={cx("SidebarList")}>
        {dataCategories.Categories.map((category) => {
          return (
            <CategoriesItem
              key={category.idCategory}
              category={category}
              handleMenuClick={handleMenuClick}
            />
          );
        })}
      </div>
    </div>
  );
};
