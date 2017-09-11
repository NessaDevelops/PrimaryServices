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
          <a href="https://www.facebook.com/PrimaryServices">
            <img src={require("../../imgs/facebook.png")} alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/company/23099/">
            <img src={require("../../imgs/linkedin.png")} alt="linkedin" />
          </a>
          <a href="https://twitter.com/primaryservices">
            <img src={require("../../imgs/twitter.png")} alt="twitter" />
          </a>
          <a href="https://plus.google.com/+PrimaryServicesHouston">
            <img src={require("../../imgs/google.png")} alt="google+" />
          </a>
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