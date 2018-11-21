import {
  APPLICANT_DETAILS,
  APPLICANT_LOCATION_DATA,
  APPLICANT_LOGIN,
  APPLICANT_SIGNUP
} from "../actions/types";

const initialState = {
  authFlag: false,
  username: "",
  firstname: "",
  location: false,
  inserted: false,
  details: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case APPLICANT_LOGIN:
      return {
        ...state,
        authFlag: true,
        username: action.payload.username,
        firstname: action.payload.firstname
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
        firstname: action.payload.firstname,
        username: action.payload.username
      };

    default:
      return state;
  }
}
