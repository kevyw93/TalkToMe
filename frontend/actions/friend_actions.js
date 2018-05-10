export const ALL_USERS = "ALL_USERS";
import * as FriendBarUtil from "../utils/friend_api_util";

export const receiveAllUser = (allUsers) => {
  debugger
  return {
    type: ALL_USERS,
    allUsers: allUsers
  };
};

export const getAllUsers = () => {
  debugger
  return dispatch => {
    return FriendBarUtil.getAllUsers().then(
      (users) => dispatch(receiveAllUser(users))
    );
  };
};
