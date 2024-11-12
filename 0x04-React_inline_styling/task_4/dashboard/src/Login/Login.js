import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input className={css(styles.input)} type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input className={css(styles.input)} type="password" name="password" />
          <button className={css(styles.button)}>OK</button>
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  input: {
    margin: "10px 0",
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  button: {
    marginTop: "15px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    width: "100%",
  },

  // Media queries for screens under 900px
  "@media (max-width: 900px)": {
    "App-body": {
      padding: "1em",
    },
    input: {
      width: "100%",
    },
    button: {
      width: "100%",
    },
  },

  // Styling for large screens (default)
  "@media (min-width: 900px)": {
    "App-body": {
      padding: "2em 5em",
    },
    input: {
      width: "50%",
    },
    button: {
      width: "50%",
    },
  },
});

export default Login;
