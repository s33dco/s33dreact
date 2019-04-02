import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="footer-strap">
      <h3>develop and grow with s33d</h3>
      <div className="copyright">
        <p>s33d © {(new Date().getFullYear())}</p>
      </div>
    </div>
  </footer>
);

export default Footer;