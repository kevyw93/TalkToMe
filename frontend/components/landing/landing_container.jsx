import {connect} from 'react-redux';
import Landing from './landing';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
