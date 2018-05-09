import {connect} from 'react-redux';
import Landing from './landing';
import {login, signup, logout} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let userName;
  if(state.entities.session.currentUser){
    userName = state.entities.session.currentUser.email;
  }
  return {
    userEmail: userName,
    loggedIn: Boolean(state.entities.session.currentUser),
    errors: state.errors.session,
    formType: ownProps.location.pathname.slice(1),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === "login") ? login : signup;
  return {
    processForm: (user) => dispatch(processForm(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
