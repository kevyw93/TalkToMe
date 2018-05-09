import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from "./errors_reducer";
import FriendsReducer from "./friends_reducer";

const entitiesReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  friends: FriendsReducer
});

export default entitiesReducer;
