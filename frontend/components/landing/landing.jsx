import React from 'react';
import {Switch, Route} from "react-router-dom";
import LoginContainer from "../login/login_container";
import SignUpContainer from '../signup/signup_container';
import MainPageContainer from "../main/main_page_container";


class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let landing;
    let userEmail;
    if(this.props.userEmail){
      userEmail = this.props.userEmail;
    }
    if (this.props.loggedIn) {
      landing =
      <div className="logged-in-container">
        <MainPageContainer />
        <button className="logout" onClick={this.props.logout}>Logout</button>
    </div>;
    }else{
      landing =
      <div className="landing-page">
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/signup" component={SignUpContainer} />
        </Switch>
      </div>;
    }

    return(
      <main className="landing-page-container">
        {landing}
      </main>
    );
  }
}

export default Landing;
