import {
  APPLICANT_DETAILS,
  APPLICANT_LOCATION_DATA,
  APPLICANT_LOGIN,
  APPLICANT_SIGNUP
} from "../actions/types";

const initialState = {
  authFlag: false,
  username: "",
  location: false,
  details: false,
  inserted: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case APPLICANT_LOGIN:
      return {
        ...state,
        // authFlag: true,
        token: action.payload
      };

    case APPLICANT_LOCATION_DATA:
      return {
        ...state,
        location: true
      };

    case APPLICANT_DETAILS:
      return {
        ...state,
        details: true
      };

    case APPLICANT_SIGNUP:
      return {
        ...state,
        inserted: true,
        username: action.payload.email
      };

    default:
      return state;
  }
}
