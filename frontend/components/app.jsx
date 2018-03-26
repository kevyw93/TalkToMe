import React from 'react';
import LandingContainer from './landing/landing_container';
import SignUpContainer from './signup/signup_container';
import LoginContainer from './login/login_container';
import {Switch, Route} from 'react-router-dom';
const App = () => {
  return (
    <div className="landing-container">
      <Switch>
        <Route path="/" component={LandingContainer} />

      </Switch>
    </div>
  );
};

export default App;
