import {
  SEARCH_JOB,
  POST_A_JOB,
  EDIT_JOB,
  GET_JOB_BY_ID
} from "../actions/types";

const initialState = {
  search_job_results: [],
  view: [],
  newJob: [],
  job_edit: []
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
    case EDIT_JOB:
      return {
        ...state,
        newJob: action.payload
      };
    case GET_JOB_BY_ID:
      return {
        ...state,
        job_edit: action.payload
      };

    default:
      return state;
  }
}
