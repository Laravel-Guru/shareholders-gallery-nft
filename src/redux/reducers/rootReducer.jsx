import { combineReducers } from "redux";
import config from './templateConfig/';
import Icons from "./icons/";

const rootReducer = combineReducers({
  config,
  Icons
});

export default rootReducer;