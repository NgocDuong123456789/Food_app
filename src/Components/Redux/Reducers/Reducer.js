const initialState = {
  Menu: [],
  Categories: [],
  DataMenu: [],
  DataItem: {},
};

const ReducerFood = (state = initialState, action) => {
  switch (action.type) {
    case "TYPE_CATEGORIES":
      return {
        ...state,
        Categories: action.payload,
      };
    case "TYPE_MENU":
      return {
        ...state,
        Menu: action.payload,
      };
    case "DATA_MENU":
      return {
        ...state,
        DataMenu: action.payload,
      };
    case "DATA_ITEM":
      return {
        ...state,
        DataItem: action.payload,
      };
    default:
      return state;
  }
};

export default ReducerFood;
