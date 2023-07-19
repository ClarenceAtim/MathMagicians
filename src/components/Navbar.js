import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <h1>Math Magicians</h1>
      </div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator" activeClassName="active">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote" activeClassName="active">Quote</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
