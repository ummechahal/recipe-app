import React from 'react';
import './MainMenu.css';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className="hr" />
        <ul className="menu">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Explore</Link>
          </li>
          <li>
            <Link to="#">Help</Link>
          </li>
          <li>
            <Link to="#">Profile</Link>
          </li>
        </ul>
        <div className="hr" />
      </div>
    </React.Fragment>
  );
};

export default MainMenu;
