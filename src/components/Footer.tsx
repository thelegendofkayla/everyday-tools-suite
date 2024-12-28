import React from 'react';
import '../styles/global.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© 2024 Everyday Tools Suite</p>
      <ul className="footer-links">
        <li><a href="/">Privacy Policy</a></li>
        <li><a href="/">Terms of Service</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </footer>
  );
};

export default Footer;