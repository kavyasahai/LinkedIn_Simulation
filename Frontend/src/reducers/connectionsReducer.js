import { GET_ALL_CONNECTIONS } from "../actions/types";

const initialState = {
  allConnections: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CONNECTIONS:
      return {
        ...state,
        allConnections: action.payload
      };

    default:
      return state;
  }
}
