import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootFood from "../Reducers/Index";

export const store = createStore(RootFood, applyMiddleware(thunk));
