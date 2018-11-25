import { RECRUITER_DASHBOARD_TOP10 } from "../actions/types";

const initialState = {
  data_top10: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECRUITER_DASHBOARD_TOP10:
      return {
        ...state,
        data_top10: action.payload
      };

    default:
      return state;
  }
}
