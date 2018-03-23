import {connect} from 'react-redux';
import Login from "./login";
import {login} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.entities.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
