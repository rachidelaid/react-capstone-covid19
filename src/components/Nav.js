import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

const Nav = ({ title, link }) => {
  const [pink, setPink] = useState(true);

  const changeTheme = () => {
    if (!pink) {
      document.documentElement.style.setProperty('--pink-primary', '#ec4c8a');
      document.documentElement.style.setProperty('--pink-light', '#fd5193');
      document.documentElement.style.setProperty('--pink-dark', '#ce4176');
      document.documentElement.style.setProperty('--pink-darker', '#a32656');
    } else {
      document.documentElement.style.setProperty('--pink-primary', '#4369B2');
      document.documentElement.style.setProperty('--pink-light', '#5687E3');
      document.documentElement.style.setProperty('--pink-dark', '#3F62A5');
      document.documentElement.style.setProperty('--pink-darker', '#2D4573');
    }
    setPink(!pink);
  };

  return (
    <nav className="navbar">
      <Link to={link}>
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
          />
        </svg>
      </Link>
      <p>{title}</p>
      <svg viewBox="0 0 24 24" onClick={changeTheme}>
        <path
          fill="currentColor"
          d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z"
        />
      </svg>
    </nav>
  );
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Nav;
