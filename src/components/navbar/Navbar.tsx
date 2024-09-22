import React from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from '../../assets/arrow.png';
import PeopleIcon from '../../assets/people.png';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <React.Fragment>
      <nav className="nav">
        <ul className="nav__left">
          <li>
            <Link to="#">COMMUNITY</Link>
          </li>
          <li>
            <Link to="#">BOOKS</Link>
          </li>
          <li>
            <Link to="#">RECIPE INDEX</Link>
          </li>
          <li>
            <Link to="#">POPULAR</Link>
          </li>
        </ul>
        <ul className="nav__right">
          <li>
            <img src={ArrowIcon} alt="register icon" />
            <Link to="#">REGISTER</Link>
          </li>
          <li>
            <img src={PeopleIcon} alt="people icon" />
            <Link to="#">LOGIN</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
