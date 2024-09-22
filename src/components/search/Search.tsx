import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '../../assets/search.png';

const Search: React.FC = () => {
  return (
    <React.Fragment>
      <div className="search">
        <div className="search__dropdown">
          <span> All Categories</span>
        </div>
        <input type="text" placeholder="Search" className="search__input" />
        <button className="search__button">
          <img src={SearchIcon} alt="search icon" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Search;
