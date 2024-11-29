import React, { useContext } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../AppContext"; // Import the AppContext

function Header() {
  const { user, logOut } = useContext(AppContext); // Get user and logOut from context

  return (
    <div className={css(styles["App-header"])}>
      <img src={logo} className={css(styles.img)} alt="logo" />
      <h1>School dashboard</h1>

      {user.isLoggedIn && user.email ? ( // Check if the user is logged in
        <div className="logoutSection">
          <span>Welcome, {user.email}</span>
          <button className="logoutLink" onClick={logOut}>
            Log out
          </button>
        </div>
      ) : (
        <div className="loginSection">
          <span>Login to access the full dashboard</span>
        </div>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
});

export default Header;
