import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {email:'', password: ''};
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
    const user = {'user' :{'email': this.state.email, 'password': this.state.password}};
    this.props.login(user);
  }

  render() {
    return(
      <div className="login-page">
        <div className="outer-logo-container">
          <div className="inner-logo-container">
            <img src="https://gbatemp.net/attachments/gbatemp_discord-png.77834/"
            className="logo"/>
            <h1 className="title-logo">TalkToMe</h1>
          </div>
        </div>

        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form">
            <input className="input-box" type="text" value={this.state.email} onChange={this.handleChange("email")} placeholder="E-mail"/>
            <input className="input-box" type="password" value={this.state.password} onChange={this.handleChange("password")} placeholder="Password"/>
            <button>Login</button>
          </form>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default Login;
