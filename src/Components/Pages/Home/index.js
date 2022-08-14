import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApiMenu } from "../../Redux/Action/MenuFood";
import { Menu } from "./Menu.js";
import className from "classnames/bind";
import style from "./Home.module.scss";

import { DataItem } from "../../Redux/Action/MenuFood";

const cx = className.bind(style);
export const Home = () => {
  const dataMenu = useSelector((state) => state.Food);
  localStorage.setItem("menudata", JSON.stringify(dataMenu.Menu));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ApiMenu());
  }, []);

  const handleMenuClick = (food) => {
    dispatch(DataItem(food));
    // localStorage.setItem("data", JSON.stringify(food));
  };

  return (
    <>
      <h1 className={cx("Title")}>Menu</h1>
      <div className={cx("home")}>
        {dataMenu.Menu.map((food) => (
          <Menu
            key={food.idMeal}
            food={food}
            handleMenuClick={handleMenuClick}
          />
        ))}
      </div>
    </>
  );
};
