import React from 'react';
import LandingContainer from './landing/landing_container';
import {Switch, Route} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingContainer} />
      </Switch>
    </div>
  );
};

export default App;
