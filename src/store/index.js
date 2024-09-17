import { combineReducers } from "redux";
import auth from "./auth";
import billBoard from "./billBoard";

const appReducer = combineReducers({
  auth,
  billBoard,
  auth,
});

const rootReducer = (state, action) => {
  if (action.type === "RESSET_STORE") {
    state = {};
    sessionStorage.removeItem("token");
    localStorage.clear();
  }
  return appReducer(state, action);
};

export default rootReducer;
