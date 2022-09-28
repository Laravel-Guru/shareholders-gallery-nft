import { combineReducers } from "redux";
import icons from "./icons";

const icon = (state = icons, action) => state;
const iconSearch = (state = "", action) => {
  switch (action.type) {
    case "FILTER_ICON":
      return action.searchTerm;
    default:
      return state;
  }
};

const iconReducer = combineReducers({
  icon,
  iconSearch
});

export default iconReducer;
