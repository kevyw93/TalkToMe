import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import SignUp from './signup';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.entities.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
