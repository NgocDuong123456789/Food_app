import { Config } from "../Config/Config";
import { Home } from "../Pages/Home/index";
import { Categories } from "../Pages/Categories/Categories";
import { MealItem } from "../Pages/MealItem/MealItem";

export const FoodComponent = [
  {
    path: Config.home,
    component: Home,
  },
  {
    path: Config.categoriesItem,
    component: Categories,
  },
  {
    path: Config.MealItem,
    component: MealItem,
    check: true,
  },
];
