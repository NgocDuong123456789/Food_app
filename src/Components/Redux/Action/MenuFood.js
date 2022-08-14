import axios from "axios";

const APICATEGORIES = `https://www.themealdb.com/api/json/v1/1/categories.php`;
const APIMENU = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
export const ApiCategories = () => async (dispatch) => {
  await axios
    .get(APICATEGORIES)
    .then((res) => {
      dispatch({ type: "TYPE_CATEGORIES", payload: res.data.categories });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const ApiMenu = () => async (dispatch) => {
  await axios
    .get(APIMENU)
    .then((res) => {
      dispatch({ type: "TYPE_MENU", payload: res.data.meals });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const ActionMenu = (payload) => {
  return {
    payload,
    type: "DATA_MENU",
  };
};

export const DataItem = (payload) => {
  return {
    payload,
    type: "DATA_ITEM",
  };
};
