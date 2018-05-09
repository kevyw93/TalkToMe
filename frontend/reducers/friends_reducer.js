import {ALL_USERS} from "../../actions/friend_actions";

const preloadedState = {
  allUsers: []
};

const FriendsReducer = (state = preloadedState, action) => {
  let newState;
  switch(action.type){
    case ALL_USERS:
      newState = Object.assign({}, state, {allUsers: action.allUsers});
      return newState;
    default:
      return state;
  }
};

export default FriendsReducer;
