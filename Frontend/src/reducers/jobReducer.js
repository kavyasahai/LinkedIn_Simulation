import { SEARCH_JOB } from "../actions/types";

const initialState = {
  search_job_results: [],
  view:[]
};

export default function(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case SEARCH_JOB:
      return {
        
        ...state,
        search_job_results: action.payload.updatedList,
        view :action.payload.updatedList[0]
        //  search: true
        // getProperty: false
      };

    default:
      return state;
  }
}
