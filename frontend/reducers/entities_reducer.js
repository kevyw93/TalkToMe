import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';

const entitiesReducers = combineReducers({
  session: sessionReducer
});

export default entitiesReducers;
