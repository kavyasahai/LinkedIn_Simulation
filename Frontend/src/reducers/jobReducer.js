import { SEARCH_JOB, POST_A_JOB } from "../actions/types";

const initialState = {
  search_job_results: [],
  view: [],
  newJob: []
};

export default function(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case SEARCH_JOB:
      return {
        ...state,
        search_job_results: action.payload.updatedList,
        view: action.payload.updatedList[0]
      };
    case POST_A_JOB:
      return {
        ...state,
        newJob: action.payload
      };

    default:
      return state;
  }
}
