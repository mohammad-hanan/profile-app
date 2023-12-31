import userReducer from "./user-slice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
