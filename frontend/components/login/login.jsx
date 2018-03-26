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
      <div className="login-page">
        <div className="logo-container">
          <img src="https://d9hhrg4mnvzow.cloudfront.net/www.kidguard.com/56517f57-calls.png"
          className="logo"/>
        </div>

        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form">
            <input type="text" value={this.state.email} onChange={this.handleChange("email")} placeholder="E-mail"/>
            <input type="password" value={this.state.password} onChange={this.handleChange("password")} placeholder="Password"/>
            <button>Login</button>
          </form>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default Login;
