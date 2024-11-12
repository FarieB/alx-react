import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton_logo.jpg';

function Header() {
  return (
    <div className={css(styles.appHeader)}>
      <img src={logo} alt="logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderBottom: '3px solid #e1484c',
    padding: '20px',
  },
  logo: {
    height: '100px',
    marginRight: '20px',
  },
  title: {
    fontSize: '2.5em',
    color: '#e1484c',
  },
});

export default Header;
