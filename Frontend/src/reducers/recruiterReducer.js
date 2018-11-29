import { POSTED_APPLICATIONS } from '../actions/types'

const initialState = {
  posted_applications: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case POSTED_APPLICATIONS:
      return {
        ...state,
        posted_applications: []
      }
    default:
      return state
  }
}
