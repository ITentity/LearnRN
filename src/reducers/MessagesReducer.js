
import {
  SEND_MESSAGES,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGES:
      return state;
    default:
      return state;
  }
};
