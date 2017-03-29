import { combineReducers } from 'redux';

import MessagesAction from './MessagesReducer';
import SyncAction from './SyncReducer';

export default combineReducers({
  sync: SyncAction,
  messages: MessagesAction,
});
