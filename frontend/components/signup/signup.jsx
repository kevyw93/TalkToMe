import React from 'react';
import {Link} from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email:'', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field){
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {'email': this.state.email, 'password': this.state.password};
    this.props.signup(user);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} onChange={this.handleChange("email")} placeholder="E-mail"/>
          <input type="password" value={this.state.password} onChange={this.handleChange("password")} placeholder="Password"/>
        <button>Sign Up</button>
        </form>
        <Link to="/">Login</Link>
      </div>
    );
  }
}

export default Signup;
