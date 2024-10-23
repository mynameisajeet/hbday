import React from 'react';
import './Footer.css';

const Footer = ({ name }) => {
  return (
    <footer className="footer-container">
      <div className="scrolling-text">
        Happy Birthday, {name}!
      </div>
    </footer>
  );
};

export default Footer;
