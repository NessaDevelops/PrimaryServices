import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <div className="logo" />
        </Link>
        <nav>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/projects">
            <p>Projects</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </nav>
        <div>
          MENU
          <img />
        </div>
      </header>
    );
  }
}

export default Navbar;