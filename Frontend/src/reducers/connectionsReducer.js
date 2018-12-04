import {
  GET_ALL_CONNECTIONS,
  ACCEPT_CONNECTION,
  REJECT_CONNECTION
} from "../actions/types";

const initialState = {
  allConnections: [],
  acceptConnection: [],
  rejectConnection: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CONNECTIONS:
      console.log("payload=", action.payload);
      return {
        ...state,
        allConnections: action.payload
      };
    case ACCEPT_CONNECTION:
      return {
        ...state,
        acceptConnection: action.payload
      };
    case REJECT_CONNECTION:
      return {
        ...state,
        rejectConnection: action.payload
      };

    default:
      return state;
  }
}
