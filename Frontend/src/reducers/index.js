import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import applicantReducer from "./applicantReducer";
import recruiterDashboardReducer from "./recruiterDashboardReducer";
import getProfileViewsReducer from "./getProfileViewsReducer";
import recruiterReducer from "./recruiterReducer";
import jobReducer from "./jobReducer";

export default combineReducers({
  applicantLogin: applicantReducer,
  form: formReducer,
  recruiterDashboard: recruiterDashboardReducer,
  getProfileViewsReducer: getProfileViewsReducer,
  recruiterReducer: recruiterReducer,
  jobReducer: jobReducer
});
