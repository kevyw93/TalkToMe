import {ALL_USERS} from "../actions/friend_actions";

const preloadedState = {
  allUsers: []
};

const FriendsReducer = (state = preloadedState, action) => {
  let newState;
  switch(action.type){
    case ALL_USERS:

      let tempArr;
      if(action.allUsers){
        tempArr = [];
        const userKeys = Object.keys(action.allUsers);
        for(let i = 0; i < userKeys.length; i ++){
          tempArr.push(action.allUsers[userKeys[i]].email);
        }
      }
      newState = Object.assign({}, state, {allUsers: tempArr});
      return newState;
    default:
      return state;
  }
};

export default FriendsReducer;
