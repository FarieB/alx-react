import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault(); // Prevent page reload
    this.setState({ isLoggedIn: true });
    console.log('Login submitted');
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState(
      { email },
      this.toggleSubmitButton // Call the callback to evaluate enableSubmit
    );
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState(
      { password },
      this.toggleSubmitButton // Call the callback to evaluate enableSubmit
    );
  }

  toggleSubmitButton() {
    const { email, password } = this.state;
    const enableSubmit = email !== '' && password !== '';
    this.setState({ enableSubmit });
  }

  render() {
    return (
      <React.Fragment>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <input
              type="submit"
              value="OK"
              disabled={!this.state.enableSubmit}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
