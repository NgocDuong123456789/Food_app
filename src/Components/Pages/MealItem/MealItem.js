import { useSelector } from "react-redux";
import className from "classnames/bind";
import style from "./MealItem.module.scss";
import Header from "../../Layout/DefaultLayout/Header/Header";

const cx = className.bind(style);
export const MealItem = () => {
  const DataFood = useSelector((state) => state.Food);

  return (
    <div>
      <Header />
      <div className={cx("swapper")}>
        <div className={cx("imgbox")}>
          <img
            src={DataFood.DataItem.strMealThumb}
            alt="k lm mà đòi có ăn"
            className={cx("img")}
          />
        </div>

        <div className={cx("content")}>
          <h1>Big Mac</h1>
          <div className={cx("info")}>
            <p>{`Category: ${DataFood.DataItem.strIngredient1}`}</p>
            <p>{`Tag: ${DataFood.DataItem.strMeal}`}</p>
            <p>{`Arear: ${DataFood.DataItem.strArea}`}</p>
          </div>
          <h2>Ingredients:</h2>
          <div className={cx("ingredients")}>
            <p>{`Category: ${DataFood.DataItem.strIngredient1} `}</p>
          </div>
          <h2>Introduction:</h2>
          <div className={cx("introduction")}>
            <p>{`Category: ${DataFood.DataItem.strInstructions}`}</p>
          </div>
          <a href={DataFood.DataItem.strYoutube} target="_blank">
            Watch on youtobe
          </a>
        </div>
      </div>
    </div>
  );
};
