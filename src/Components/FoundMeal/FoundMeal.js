import { memo } from "react";
import className from "classnames/bind";
import style from "./FoundMeal.module.scss";

const cx = className.bind(style);

export const FoundMeal = () => {
  return <h1 className={cx("swapper")}>Sorry No Meal Found</h1>;
};
export default memo(FoundMeal);
