import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import applicantReducer from "./applicantReducer";
import recruiterDashboardReducer from "./recruiterDashboardReducer";

export default combineReducers({
  applicantLogin: applicantReducer,
  form: formReducer,
  recruiterDashboard: recruiterDashboardReducer
});
