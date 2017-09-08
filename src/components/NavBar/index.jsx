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
            <img src={require("../../imgs/facebook.png")} alt="facebook" />
          </Link>
          <Link to="/projects">
            <img src={require("../../imgs/linkedin.png")} alt="linkedin" />
          </Link>
          <Link to="/contact">
            <img src={require("../../imgs/twitter.png")} alt="twitter" />
          </Link>
          <Link to="/contact">
            <img src={require("../../imgs/google.png")} alt="google+" />
          </Link>
        </nav>
        <div>
          MENU
          <img src={require("../../imgs/menu.png")} alt="menu" />
        </div>
      </header>
    );
  }
}

export default Navbar;