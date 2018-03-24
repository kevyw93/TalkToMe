import React from 'react';
import {Switch, Route} from "react-router-dom";
import LoginContainer from "../login/login_container";
import SignUpContainer from '../signup/signup_container';


class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <main className="landing-page">
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/signup" component={SignUpContainer} />
        </Switch>
      </main>
    );
  }
}

export default Landing;
