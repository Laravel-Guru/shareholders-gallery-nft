import { combineReducers } from "redux";
import feather from "./feather/";
import flag from "./flag/";

const Icon = combineReducers({
  feather,
  flag
});

export default Icon;
