import {RECEIVE_ERRORS} from '../actions/session_actions';

const errorsReducer = (state = {errors:null}, action) =>{
  switch(action.type) {
    case RECEIVE_ERRORS:

      return Object.assign({}, state, action.errors);
    default:
      return state;
  }
};

export default errorsReducer;
