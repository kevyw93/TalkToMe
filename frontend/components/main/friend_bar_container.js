import {connect} from "react-redux";
import FriendBar from "./friend_bar";
import {getAllUsers} from "../../actions/friend_actions";

const mapStateToProps = (state) =>{
  return {
    friends: state.entities.friends.allUsers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(getAllUsers())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FriendBar);
