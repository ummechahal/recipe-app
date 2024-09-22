import React from 'react';
import './Footer.css';
import FooterImage from '../../assets/footer.png';
import FooterLogo from '../../assets/CP-Logo 2.png';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <img src={FooterImage} alt="footer image" className="footer__banner" />
        <div className="footer__logo">
          <img src={FooterLogo} alt="footer logo" />
          <p>All rights reserved</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
