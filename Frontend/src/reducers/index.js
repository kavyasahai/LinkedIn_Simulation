import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import applicantReducer from "./applicantReducer";

export default combineReducers({
  applicantLogin: applicantReducer,
  form: formReducer
});
