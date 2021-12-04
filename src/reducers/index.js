import sessionReducer from "./auth";
import LanguagesReducer from "./languages";
import ScannerReducer from "./scanner";
import AddMemberReducer from "./addMember";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  sessions: sessionReducer,
  languages: LanguagesReducer,
  scanner: ScannerReducer,
  addMember: AddMemberReducer,
});

export default allReducers;
