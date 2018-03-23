import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
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
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} onChange={this.handleChange("email")} placeholder="E-mail"/>
          <input type="password" value={this.state.password} onChange={this.handleChange("password")} placeholder="Password"/>
          <button>Login</button>
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

export default Login;
