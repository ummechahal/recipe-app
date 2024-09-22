import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Logo from '../../assets/CP-Logo 1.png';
import Banner from '../../assets/cropped-pistaciafood_11 1.png';
import Search from '../../components/search/Search';
import './Home.css';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="brand">
        <img src={Logo} alt="brand logo" className="logo" />
        <Search />
        <img src={Banner} alt="banner" className="banner" />
      </div>
    </React.Fragment>
  );
};

export default Home;
