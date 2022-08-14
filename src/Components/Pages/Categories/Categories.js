import { useSelector, useDispatch } from "react-redux";
import className from "classnames/bind";
import style from "./Categories.module.scss";
import { CategoriesItem } from "./CategoiesItem";
import FoundMeal from "../../FoundMeal/FoundMeal";
import { DataItem } from "../../Redux/Action/MenuFood";

const cx = className.bind(style);

export const Categories = () => {
  const dispatch = useDispatch();
  const dataCategories = useSelector((state) => state.Food);

  const handleMenuClick = (food) => {
    dispatch(DataItem(food));
  };

  return (
    <>
      <h1 className={cx("Title")}>Menu</h1>
      {dataCategories.DataMenu.length === 0 ? (
        <FoundMeal />
      ) : (
        <div className={cx("home")}>
          {dataCategories.DataMenu.map((food) => (
            <CategoriesItem
              key={food.idMeal}
              food={food}
              handleMenuClick={handleMenuClick}
            />
          ))}
        </div>
      )}
    </>
  );
};
