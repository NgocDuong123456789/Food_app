import { combineReducers } from "redux";
import ReducerFood from "./Reducer";
const RootFood = combineReducers({
  Food: ReducerFood,
});

export default RootFood;
