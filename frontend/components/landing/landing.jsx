import React from 'react';
import {Switch} from "react-router-dom";
import Login from "./login";

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <main>
        <Login props={this.props} />
      </main>
    );
  }
}

export default Landing;
