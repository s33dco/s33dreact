import React from 'react';
import moment from 'moment';

const Footer = () => (
  <footer>
    <div className="footer-strap">
      <h3>develop and grow with s33d</h3>
      <div className="copyright">
        <p>s33d © {moment().format('YYYY')}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
