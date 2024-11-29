import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login({ logIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);  // Call the logIn function passed from App
  };

  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
          <button type="submit">OK</button>
        </form>
      </div>
    </React.Fragment>
  );
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
});

export default Login;
