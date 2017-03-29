
import {
  SYNC_REQUEST,
  SYNC_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SYNC_REQUEST:
      return state;
    case SYNC_SUCCESS:
      return state;
    default:
      return state;
  }
};
