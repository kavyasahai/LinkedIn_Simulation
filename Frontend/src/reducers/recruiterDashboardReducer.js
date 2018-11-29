import {
  RECRUITER_DASHBOARD_TOP10,
  RECRUITER_DASHBOARD_TOP5
} from "../actions/types";

const initialState = {
  data_top10: [],
  data_top5: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECRUITER_DASHBOARD_TOP10:
      return {
        ...state,
        data_top10: action.payload
      };

    case RECRUITER_DASHBOARD_TOP5:
      return {
        ...state,
        data_top5: action.payload
      };
    default:
      return state;
  }
}
