import React from 'react';
import logo from './logo-FEEDR.png';
import { NavLink } from 'react-router-dom';
import './App.css';

const Header = (props) => (
    <div className="Header">
      <NavLink
        to="/"
      >
        <img src={logo} className="Header-logo" alt="logo" />
      </NavLink>
      <h1>Feedr</h1>
      <NavLink
        to="/timeline"
        className="Link"
        activeClassName="Link--active"
      >
          Timeline
        </NavLink>
    </div>
);

export default Header;
