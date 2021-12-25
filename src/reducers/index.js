import sessionReducer from "./auth";
import LanguagesReducer from "./languages";
import AddMemberReducer from "./addMember";
import OrderListReducer from "./orderList";
import orderFormReducer from "./orderForm";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  sessions: sessionReducer,
  languages: LanguagesReducer,
  addMember: AddMemberReducer,
  orderList: OrderListReducer,
  orderForm: orderFormReducer,
});

export default allReducers;
