import {connect} from 'react-redux';
import MainPage from './main_page';

const mapStateToProps = (state) => {
  return {
    email: state.entities.session.currentUser.email
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
