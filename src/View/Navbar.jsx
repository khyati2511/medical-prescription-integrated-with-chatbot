import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <h2>Logo</h2>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Conatct us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
