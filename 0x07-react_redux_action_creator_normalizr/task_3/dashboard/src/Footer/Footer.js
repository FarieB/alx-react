import React, { useContext } from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { AppContext } from '../AppContext'; // Import the AppContext

function Footer() {
  const { user } = useContext(AppContext); // Get the user object from context

  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      {user.isLoggedIn && user.email && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </div>
  );
}

export default Footer;
