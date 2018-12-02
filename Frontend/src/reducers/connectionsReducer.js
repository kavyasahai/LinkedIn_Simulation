import {
  GET_ALL_CONNECTIONS,
  ACCEPT_CONNECTION,
  REJECT_CONNECTION,
  GET_RECEIVED_CONNECTIONS
} from "../actions/types";

const initialState = {
  allConnections: [],
  acceptConnection: [],
  rejectConnection: [],
  receivedConnections: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CONNECTIONS:
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
    case GET_RECEIVED_CONNECTIONS:
      return {
        ...state,
        receivedConnections: action.payload
      };

    default:
      return state;
  }
}
