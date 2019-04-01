import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink to='/' activeClassName="is-active" exact={true}>Welcome</NavLink>
      <NavLink to='/projects' activeClassName="is-active" exact={true}>Projects</NavLink>
      <NavLink to='/contact' activeClassName="is-active" exact={true}>Contact</NavLink>
    </nav>
  </header>
);

export default Header;