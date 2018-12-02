import { SEARCH_JOB } from "../actions/types";

const initialState = {
  search_job_results: []
};

export default function(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case SEARCH_JOB:
      return {
        
        ...state,
        search_job_results: action.payload.updatedList
        //  search: true
        // getProperty: false
      };

    default:
      return state;
  }
}
