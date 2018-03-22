import {connect} from 'react-redux';
import Landing from './landing';
import {login, signup} from '../../utils/session_api_util';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.entities.session.currentUser),
    errors: state.errors.session,
    formType: ownProps.location.pathname.slice(1)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === "login") ? login : signup;
  return {
    processForm: (user) => dispatch(processForm(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
