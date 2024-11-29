import React from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault(); // Prevent page reload
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState(
      { email },
      this.updateSubmitButtonState // Update submit button state after state change
    );
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState(
      { password },
      this.updateSubmitButtonState // Update submit button state after state change
    );
  }

  updateSubmitButtonState() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== "" && password !== "" });
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles["App-body"])}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              className={css(styles.input)}
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            <label htmlFor="password">Password:</label>
            <input
              className={css(styles.input)}
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <input
              type="submit"
              value="OK"
              disabled={!this.state.enableSubmit}
              className={css(styles.submit)}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
  },

  input: {
    margin: "10px",
  },

  submit: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  },
});

export default Login;
